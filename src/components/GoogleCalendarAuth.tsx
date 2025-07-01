import React, { useState, useEffect } from 'react';
import { googleCalendarAuth } from '../services/googleCalendarAuth';

interface GoogleCalendarAuthProps {
  onAuthSuccess?: () => void;
  onAuthError?: (error: string) => void;
}

export const GoogleCalendarAuth: React.FC<GoogleCalendarAuthProps> = ({
  onAuthSuccess,
  onAuthError
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<{ email?: string; name?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuthStatus();
    
    // Handle OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');
    
    if (code) {
      handleAuthCallback(code);
    } else if (error) {
      setError(`Authentication failed: ${error}`);
      onAuthError?.(error);
    }
  }, []);

  const checkAuthStatus = async () => {
    try {
      const authenticated = googleCalendarAuth.isAuthenticated();
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        const connectionTest = await googleCalendarAuth.testConnection();
        if (connectionTest.success) {
          const info = await googleCalendarAuth.getUserInfo();
          setUserInfo(info);
        } else {
          setIsAuthenticated(false);
          setError(connectionTest.error || 'Connection test failed');
        }
      }
    } catch (err) {
      console.error('Auth status check failed:', err);
      setIsAuthenticated(false);
    }
  };

  const handleAuthCallback = async (code: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await googleCalendarAuth.exchangeCodeForTokens(code);
      
      if (result.success) {
        setIsAuthenticated(true);
        const info = await googleCalendarAuth.getUserInfo();
        setUserInfo(info);
        onAuthSuccess?.();
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        setError(result.error || 'Authentication failed');
        onAuthError?.(result.error || 'Authentication failed');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Authentication failed';
      setError(errorMsg);
      onAuthError?.(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = () => {
    try {
      if (!googleCalendarAuth.isConfigured()) {
        setError('Google Calendar integration is not configured. Please check your environment variables.');
        return;
      }
      
      const authUrl = googleCalendarAuth.getAuthUrl();
      window.location.href = authUrl;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to start authentication';
      setError(errorMsg);
      onAuthError?.(errorMsg);
    }
  };

  const handleSignOut = () => {
    googleCalendarAuth.signOut();
    setIsAuthenticated(false);
    setUserInfo(null);
    setError(null);
  };

  const handleTestConnection = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await googleCalendarAuth.testConnection();
      
      if (result.success) {
        setError(null);
        // Could show a success message here
      } else {
        setError(result.error || 'Connection test failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection test failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="google-calendar-auth">
        <div className="auth-loading">
          <div className="loading-spinner"></div>
          <p>Connecting to Google Calendar...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated && userInfo) {
    return (
      <div className="google-calendar-auth">
        <div className="auth-success">
          <div className="auth-info">
            <span className="auth-icon">✅</span>
            <div>
              <h4>Connected to Google Calendar</h4>
              <p>Signed in as: {userInfo.email}</p>
              {userInfo.name && <p>Name: {userInfo.name}</p>}
            </div>
          </div>
          
          <div className="auth-actions">
            <button 
              className="btn btn-secondary btn-sm"
              onClick={handleTestConnection}
              disabled={isLoading}
            >
              Test Connection
            </button>
            <button 
              className="btn btn-danger btn-sm"
              onClick={handleSignOut}
            >
              Disconnect
            </button>
          </div>
        </div>
        
        {error && (
          <div className="auth-error">
            <span className="error-icon">⚠️</span>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="google-calendar-auth">
      <div className="auth-prompt">
        <div className="auth-info">
          <span className="auth-icon">📅</span>
          <div>
            <h4>Connect Google Calendar</h4>
            <p>Sync your calendar events to automatically create time entries</p>
          </div>
        </div>
        
        <button 
          className="btn btn-primary"
          onClick={handleSignIn}
          disabled={isLoading}
        >
          Connect Google Calendar
        </button>
      </div>
      
      {error && (
        <div className="auth-error">
          <span className="error-icon">⚠️</span>
          <p>{error}</p>
          {error.includes('environment variables') && (
            <div className="config-help">
              <p>To enable Google Calendar integration:</p>
              <ol>
                <li>Create a Google Cloud Project</li>
                <li>Enable the Google Calendar API</li>
                <li>Create OAuth 2.0 credentials</li>
                <li>Set VITE_GOOGLE_CLIENT_ID and VITE_GOOGLE_CLIENT_SECRET</li>
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
};