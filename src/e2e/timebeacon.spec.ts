import { test, expect } from '@playwright/test';

test.describe('TimeBeacon Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the app to initialize
    await page.waitForSelector('[data-testid="main-content"]', { timeout: 10000 });
  });

  test('should load the application successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/TimeBeacon/);
    await expect(page.locator('h1')).toContainText('Weekly Timesheet');
  });

  test('should navigate between different sections', async ({ page }) => {
    // Test navigation to Time Entries
    await page.click('text=Time Entries');
    await expect(page.locator('h1')).toContainText('Time Entries');

    // Test navigation to Reports
    await page.click('text=Reports');
    await expect(page.locator('h1')).toContainText('Reports');

    // Test navigation to Settings
    await page.click('text=Settings');
    await expect(page.locator('h1')).toContainText('Settings');

    // Test navigation to Privacy
    await page.click('text=Privacy');
    await expect(page.locator('h1')).toContainText('Privacy & Data Ownership');

    // Test navigation back to Dashboard
    await page.click('text=Dashboard');
    await expect(page.locator('h1')).toContainText('Weekly Timesheet');
  });

  test('should display week navigation', async ({ page }) => {
    await expect(page.locator('text=← Previous Week')).toBeVisible();
    await expect(page.locator('text=Next Week →')).toBeVisible();
    await expect(page.locator('text=Today')).toBeVisible();
  });

  test('should show week summary cards', async ({ page }) => {
    await expect(page.locator('text=Total Hours This Week')).toBeVisible();
    await expect(page.locator('text=Customer-Focused Hours')).toBeVisible();
    await expect(page.locator('text=Utilization Rate')).toBeVisible();
    await expect(page.locator('text=Pending Entries')).toBeVisible();
    await expect(page.locator('text=Automated Entries')).toBeVisible();
  });

  test('should navigate through weeks', async ({ page }) => {
    // Navigate to previous week
    await page.click('text=← Previous Week');
    await page.waitForTimeout(500); // Allow for date change

    // Navigate to next week
    await page.click('text=Next Week →');
    await page.waitForTimeout(500);

    // Go back to current week
    await page.click('text=Today');
    await page.waitForTimeout(500);
  });

  test('should add a new time entry', async ({ page }) => {
    // Navigate to Time Entries page
    await page.click('text=Time Entries');
    
    // Click Add Entry button
    await page.click('text=➕ Add Entry');
    
    // Fill out the form
    await page.fill('input[type="date"]', '2025-01-15');
    await page.fill('input[type="time"]', '09:00');
    await page.selectOption('select:has-text("15 minutes")', '1'); // 1 hour
    await page.selectOption('select:has-text("Select Project")', { label: /Website Redesign|Mobile App Development|Internal Tools/ });
    await page.fill('textarea[placeholder="What did you work on?"]', 'Test time entry from E2E test');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Verify the entry appears
    await expect(page.locator('text=Test time entry from E2E test')).toBeVisible();
  });

  test('should filter time entries by date', async ({ page }) => {
    // Navigate to Time Entries page
    await page.click('text=Time Entries');
    
    // Navigate to previous week to see different entries
    await page.click('text=← Previous Week');
    await page.waitForTimeout(500);
    
    // Navigate back to current week
    await page.click('text=Next Week →');
    await page.waitForTimeout(500);
  });

  test('should handle bulk status updates', async ({ page }) => {
    // Navigate to Time Entries page
    await page.click('text=Time Entries');
    
    // Check if there are any entries to select
    const entries = page.locator('.time-entry-card');
    const entryCount = await entries.count();
    
    if (entryCount > 0) {
      // Select an entry
      await page.check('input[type="checkbox"]').first();
      
      // Check if bulk actions appear
      await expect(page.locator('text=Bulk Actions')).toBeVisible();
      
      // Try to mark as approved
      await page.click('text=Mark Approved');
    }
  });

  test('should display privacy features', async ({ page }) => {
    // Navigate to Privacy page
    await page.click('text=Privacy');
    
    // Check for key privacy messaging
    await expect(page.locator('text=Built for Employee Privacy & Empowerment')).toBeVisible();
    await expect(page.locator('text=Your Data Stays Yours')).toBeVisible();
    await expect(page.locator('text=Personal Assistant, Not Surveillance')).toBeVisible();
    await expect(page.locator('text=Effortless Exit')).toBeVisible();
    
    // Check for data control features
    await expect(page.locator('text=Data Control Center')).toBeVisible();
    await expect(page.locator('text=Export Your Data')).toBeVisible();
    await expect(page.locator('text=Emergency Controls')).toBeVisible();
  });

  test('should handle data export', async ({ page }) => {
    // Navigate to Privacy page
    await page.click('text=Privacy');
    
    // Test JSON export (this will trigger a download)
    const downloadPromise = page.waitForEvent('download');
    await page.click('text=Export JSON');
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/timebeacon-backup-.*\.json/);
  });

  test('should handle settings updates', async ({ page }) => {
    // Navigate to Settings page
    await page.click('text=Settings');
    
    // Check if settings form is visible
    await expect(page.locator('text=General Settings')).toBeVisible();
    
    // Try to update theme
    await page.selectOption('select:has-text("Light")', 'dark');
    
    // Check for notifications settings
    if (await page.locator('input[type="checkbox"]').count() > 0) {
      await page.check('input[type="checkbox"]').first();
    }
  });

  test('should display integrations', async ({ page }) => {
    // Navigate to Integrations page
    await page.click('text=Integrations');
    
    // Check for integration cards
    await expect(page.locator('text=Google Calendar')).toBeVisible();
    await expect(page.locator('text=Slack')).toBeVisible();
    await expect(page.locator('text=Zoom')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that the app still loads
    await expect(page.locator('h1')).toContainText('Weekly Timesheet');
    
    // Navigation should still work
    await page.click('text=Time Entries');
    await expect(page.locator('h1')).toContainText('Time Entries');
  });

  test('should handle error states gracefully', async ({ page }) => {
    // Try to access a non-existent route
    await page.goto('/non-existent-route');
    
    // Should still show the main app (SPA routing)
    await expect(page.locator('h1')).toContainText(/Weekly Timesheet|Time Entries|Reports|Settings/);
  });

  test('should persist data between page reloads', async ({ page }) => {
    // Navigate to Time Entries and add an entry
    await page.click('text=Time Entries');
    await page.click('text=➕ Add Entry');
    
    // Fill minimal form
    await page.fill('textarea[placeholder="What did you work on?"]', 'Persistence test entry');
    await page.selectOption('select:has-text("Select Project")', { index: 1 });
    await page.click('button[type="submit"]');
    
    // Reload the page
    await page.reload();
    
    // Wait for app to load
    await page.waitForSelector('h1');
    
    // Entry should still be there (with our real persistence)
    await expect(page.locator('text=Persistence test entry')).toBeVisible();
  });
});