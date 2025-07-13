# TimeBeacon Version History

## Version 2.2.0 - Enhanced Dashboard with Current Week Data (2025-07-13)
**Status: Current**

### Changes Made:
- ✅ Fixed mock data to show current week (July 13, 2025) instead of old dates
- ✅ Week format confirmed as Sunday-Saturday 
- ✅ Redesigned header layout: Previous Week, Date Range, Next Week all on same line
- ✅ Add Entry button positioned below navigation with Current Week button
- ✅ Created proper Add Entry popup modal with form validation
- ✅ Fixed issue where Add Entry created random Salesforce entries
- ✅ Enhanced form with client/project dropdowns and proper validation

### Files Modified:
- `src/mockData.ts` (updated all dates to current week)
- `src/components/Dashboard.tsx` (layout fixes and Add Entry modal)

---

## Version 2.1.0 - Dashboard Restructure (2025-01-13)
**Status: Superseded**

### Changes Made:
- Renamed WeeklyCalendar component to Dashboard (main view)
- Updated navigation structure: Dashboard → Reports → AI Insights → Privacy & Data → Integrations → Settings
- Removed separate "Calendar" navigation item
- Enhanced Dashboard with comprehensive time tracking features
- Added mock data for realistic dashboard experience
- Fixed all TypeScript compilation errors

### Files Modified:
- `src/components/Dashboard.tsx` (renamed from WeeklyCalendar)
- `src/components/Sidebar.tsx` (updated navigation)
- `src/App.tsx` (updated routing)
- `src/types.ts` (updated NavigationItem type)
- Database and service files (type fixes)

### Rollback Instructions:
```bash
git revert HEAD
```

---

## Version 2.0.0 - Time Entries Integration (2025-01-13)
**Status: Superseded**

### Changes Made:
- Merged TimeEntries functionality into Dashboard
- Added week navigation and bulk actions
- Enhanced time entry management
- Added Submit Entries functionality

### Rollback Tag:
```bash
git checkout v2.0.0
```

---

## Version 1.0.0 - Initial Deployment (2025-01-13)
**Status: Baseline**

### Initial Features:
- Basic Dashboard with stats
- Separate Time Entries page
- Reports, AI Insights, Settings
- Google Calendar integration
- Local-first database

### Rollback Tag:
```bash
git checkout v1.0.0
```

---

## Quick Rollback Commands:

### To previous working version:
```bash
git revert HEAD
git push origin main
```

### To specific version:
```bash
git checkout <version-tag>
git push origin main --force
```

### Emergency rollback to baseline:
```bash
git checkout v1.0.0
git push origin main --force
```