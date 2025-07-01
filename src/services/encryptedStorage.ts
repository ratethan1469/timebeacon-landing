// Privacy-First Encrypted Local Storage
// CRITICAL: All sensitive data is encrypted before storing locally

import { LocalContentAnalysis, PrivacyAuditLog, UserPrivacySettings } from '../types/privacy';

class EncryptedStorageService {
  private encryptionKey: string | null = null;

  // Initialize encryption with user's master key
  async initialize(masterPassword?: string): Promise<void> {
    try {
      // In a real implementation, derive key from user password + device salt
      // For demo purposes, we'll use a simplified approach
      this.encryptionKey = await this.deriveEncryptionKey(masterPassword);
      
      // Verify storage integrity
      await this.verifyStorageIntegrity();
    } catch (error) {
      console.error('Failed to initialize encrypted storage:', error);
      throw new Error('Storage initialization failed');
    }
  }

  // Derive encryption key from master password
  private async deriveEncryptionKey(masterPassword?: string): Promise<string> {
    // In production, use PBKDF2, Argon2, or similar
    // This is a simplified implementation for demo
    const deviceSalt = this.getOrCreateDeviceSalt();
    const baseKey = masterPassword || 'timebeacon-default-key';
    
    // Simulate key derivation
    const encoder = new TextEncoder();
    const keyMaterial = encoder.encode(baseKey + deviceSalt);
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyMaterial,
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );
    
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: encoder.encode(deviceSalt),
        iterations: 100000,
        hash: 'SHA-256'
      },
      cryptoKey,
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    
    const exportedKey = await crypto.subtle.exportKey('raw', derivedKey);
    return Array.from(new Uint8Array(exportedKey))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // Get or create unique device salt
  private getOrCreateDeviceSalt(): string {
    const stored = localStorage.getItem('tb_device_salt');
    if (stored) return stored;
    
    const salt = crypto.getRandomValues(new Uint8Array(32));
    const saltString = Array.from(salt)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    localStorage.setItem('tb_device_salt', saltString);
    return saltString;
  }

  // Encrypt data before storage
  private async encrypt(data: any): Promise<string> {
    if (!this.encryptionKey) {
      throw new Error('Encryption not initialized');
    }

    try {
      const jsonString = JSON.stringify(data);
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(jsonString);
      
      // Generate random IV for each encryption
      const iv = crypto.getRandomValues(new Uint8Array(12));
      
      // Import key for encryption
      const keyBuffer = new Uint8Array(
        this.encryptionKey.match(/.{2}/g)!.map(byte => parseInt(byte, 16))
      );
      const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyBuffer,
        { name: 'AES-GCM' },
        false,
        ['encrypt']
      );
      
      // Encrypt the data
      const encryptedBuffer = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        dataBuffer
      );
      
      // Combine IV and encrypted data
      const combined = new Uint8Array(iv.length + encryptedBuffer.byteLength);
      combined.set(iv);
      combined.set(new Uint8Array(encryptedBuffer), iv.length);
      
      // Return as base64
      return btoa(String.fromCharCode(...combined));
    } catch (error) {
      console.error('Encryption failed:', error);
      throw new Error('Failed to encrypt data');
    }
  }

  // Decrypt data from storage
  private async decrypt(encryptedData: string): Promise<any> {
    if (!this.encryptionKey) {
      throw new Error('Encryption not initialized');
    }

    try {
      // Decode from base64
      const combined = new Uint8Array(
        atob(encryptedData).split('').map(char => char.charCodeAt(0))
      );
      
      // Extract IV and encrypted data
      const iv = combined.slice(0, 12);
      const encryptedBuffer = combined.slice(12);
      
      // Import key for decryption
      const keyBuffer = new Uint8Array(
        this.encryptionKey.match(/.{2}/g)!.map(byte => parseInt(byte, 16))
      );
      const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyBuffer,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );
      
      // Decrypt the data
      const decryptedBuffer = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        encryptedBuffer
      );
      
      // Convert back to string and parse JSON
      const decoder = new TextDecoder();
      const jsonString = decoder.decode(decryptedBuffer);
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Decryption failed:', error);
      throw new Error('Failed to decrypt data');
    }
  }

  // Verify storage integrity on startup
  private async verifyStorageIntegrity(): Promise<void> {
    try {
      const testData = { test: 'integrity_check', timestamp: Date.now() };
      const encrypted = await this.encrypt(testData);
      const decrypted = await this.decrypt(encrypted);
      
      if (decrypted.test !== testData.test) {
        throw new Error('Storage integrity check failed');
      }
    } catch (error) {
      console.error('Storage integrity verification failed:', error);
      throw error;
    }
  }

  // Store encrypted content analysis data
  async storeContentAnalysis(analysis: LocalContentAnalysis[]): Promise<void> {
    try {
      const encrypted = await this.encrypt(analysis);
      localStorage.setItem('tb_content_analysis', encrypted);
      
      // Log the storage operation
      await this.logPrivacyEvent('data_storage', {
        dataType: 'content_analysis',
        itemCount: analysis.length,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Failed to store content analysis:', error);
      throw error;
    }
  }

  // Retrieve encrypted content analysis data
  async getContentAnalysis(): Promise<LocalContentAnalysis[]> {
    try {
      const encrypted = localStorage.getItem('tb_content_analysis');
      if (!encrypted) return [];
      
      const decrypted = await this.decrypt(encrypted);
      
      // Log the access operation
      await this.logPrivacyEvent('data_access', {
        dataType: 'content_analysis',
        itemCount: decrypted.length,
        timestamp: new Date().toISOString()
      });
      
      return decrypted;
    } catch (error) {
      console.error('Failed to retrieve content analysis:', error);
      return [];
    }
  }

  // Store encrypted audit logs
  async storeAuditLogs(logs: PrivacyAuditLog[]): Promise<void> {
    try {
      const encrypted = await this.encrypt(logs);
      localStorage.setItem('tb_audit_logs', encrypted);
    } catch (error) {
      console.error('Failed to store audit logs:', error);
      throw error;
    }
  }

  // Retrieve encrypted audit logs
  async getAuditLogs(): Promise<PrivacyAuditLog[]> {
    try {
      const encrypted = localStorage.getItem('tb_audit_logs');
      if (!encrypted) return [];
      
      return await this.decrypt(encrypted);
    } catch (error) {
      console.error('Failed to retrieve audit logs:', error);
      return [];
    }
  }

  // Store user privacy settings
  async storePrivacySettings(settings: UserPrivacySettings): Promise<void> {
    try {
      const encrypted = await this.encrypt(settings);
      localStorage.setItem('tb_privacy_settings', encrypted);
    } catch (error) {
      console.error('Failed to store privacy settings:', error);
      throw error;
    }
  }

  // Retrieve user privacy settings
  async getPrivacySettings(): Promise<UserPrivacySettings | null> {
    try {
      const encrypted = localStorage.getItem('tb_privacy_settings');
      if (!encrypted) return null;
      
      return await this.decrypt(encrypted);
    } catch (error) {
      console.error('Failed to retrieve privacy settings:', error);
      return null;
    }
  }

  // Log privacy events for transparency
  private async logPrivacyEvent(action: string, details: any): Promise<void> {
    try {
      const logs = await this.getAuditLogs();
      const newLog: PrivacyAuditLog = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        action: action as any,
        source: 'local_storage' as any,
        details,
        consentVersion: '1.0',
        dataRetention: {
          retainUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          autoDeleteEnabled: true
        }
      };
      
      logs.push(newLog);
      
      // Keep only recent logs to prevent unlimited growth
      const recentLogs = logs
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 1000);
      
      await this.storeAuditLogs(recentLogs);
    } catch (error) {
      console.error('Failed to log privacy event:', error);
    }
  }

  // Export all user data (for GDPR compliance)
  async exportAllData(): Promise<{
    contentAnalysis: LocalContentAnalysis[];
    auditLogs: PrivacyAuditLog[];
    privacySettings: UserPrivacySettings | null;
    exportedAt: string;
  }> {
    try {
      const [contentAnalysis, auditLogs, privacySettings] = await Promise.all([
        this.getContentAnalysis(),
        this.getAuditLogs(),
        this.getPrivacySettings()
      ]);

      await this.logPrivacyEvent('data_export', {
        itemsExported: contentAnalysis.length + auditLogs.length + (privacySettings ? 1 : 0),
        timestamp: new Date().toISOString()
      });

      return {
        contentAnalysis,
        auditLogs,
        privacySettings,
        exportedAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('Failed to export data:', error);
      throw error;
    }
  }

  // Delete all user data (right to be forgotten)
  async deleteAllData(): Promise<void> {
    try {
      // Log the deletion before removing everything
      await this.logPrivacyEvent('data_deletion', {
        deletedAt: new Date().toISOString(),
        reason: 'user_requested'
      });

      // Remove all encrypted data
      const keysToRemove = [
        'tb_content_analysis',
        'tb_audit_logs',
        'tb_privacy_settings',
        'tb_device_salt'
      ];

      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });

      // Clear encryption key
      this.encryptionKey = null;
    } catch (error) {
      console.error('Failed to delete all data:', error);
      throw error;
    }
  }

  // Clean up old data based on retention policies
  async cleanupOldData(retentionDays: number = 30): Promise<void> {
    try {
      const cutoffDate = new Date(Date.now() - retentionDays * 24 * 60 * 60 * 1000);
      
      // Clean up old content analysis
      const contentAnalysis = await this.getContentAnalysis();
      const recentAnalysis = contentAnalysis.filter(
        analysis => new Date(analysis.analyzedAt) > cutoffDate
      );
      
      if (recentAnalysis.length !== contentAnalysis.length) {
        await this.storeContentAnalysis(recentAnalysis);
      }

      // Clean up old audit logs
      const auditLogs = await this.getAuditLogs();
      const recentLogs = auditLogs.filter(
        log => new Date(log.timestamp) > cutoffDate
      );
      
      if (recentLogs.length !== auditLogs.length) {
        await this.storeAuditLogs(recentLogs);
      }

      await this.logPrivacyEvent('data_cleanup', {
        cleanedAt: new Date().toISOString(),
        retentionDays,
        analysisItemsRemoved: contentAnalysis.length - recentAnalysis.length,
        logItemsRemoved: auditLogs.length - recentLogs.length
      });
    } catch (error) {
      console.error('Failed to cleanup old data:', error);
      throw error;
    }
  }

  // Check if storage is encrypted and working
  async isInitialized(): Promise<boolean> {
    return this.encryptionKey !== null;
  }

  // Get storage statistics
  async getStorageStats(): Promise<{
    contentAnalysisCount: number;
    auditLogCount: number;
    hasPrivacySettings: boolean;
    storageUsed: number; // in bytes
    lastAccessed: string;
  }> {
    try {
      const [contentAnalysis, auditLogs, privacySettings] = await Promise.all([
        this.getContentAnalysis(),
        this.getAuditLogs(),
        this.getPrivacySettings()
      ]);

      // Calculate approximate storage usage
      const storageUsed = JSON.stringify({
        contentAnalysis,
        auditLogs,
        privacySettings
      }).length;

      return {
        contentAnalysisCount: contentAnalysis.length,
        auditLogCount: auditLogs.length,
        hasPrivacySettings: privacySettings !== null,
        storageUsed,
        lastAccessed: new Date().toISOString()
      };
    } catch (error) {
      console.error('Failed to get storage stats:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const encryptedStorage = new EncryptedStorageService();

// Initialize on module load
encryptedStorage.initialize().catch(error => {
  console.error('Failed to initialize encrypted storage:', error);
});