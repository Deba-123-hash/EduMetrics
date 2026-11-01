import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientSrcDir = path.resolve(__dirname, '../../src');

describe('Client Components, Views & Responsive Layouts Suite', () => {
  test('All primary page views referenced in AppRoutes must exist as JSX files', () => {
    const requiredPages = [
      'pages/Home/Home.jsx',
      'pages/NotFound/NotFound.jsx',
      'features/auth/pages/LoginPage.jsx',
      'features/auth/pages/RegisterPage.jsx',
      'features/auth/pages/ForgotPasswordPage.jsx',
      'features/admin/pages/AdminDashboard.jsx',
      'features/admin/pages/UserManagement.jsx',
      'features/admin/pages/DepartmentManagement.jsx',
      'features/admin/pages/AcademicManagement.jsx',
      'features/admin/pages/SystemSettings.jsx',
      'features/admin/pages/AuditLogs.jsx',
      'features/faculty/pages/FacultyDashboard.jsx',
      'features/faculty/pages/MyClasses.jsx',
      'features/faculty/pages/MyStudents.jsx',
      'features/faculty/pages/MarkAttendance.jsx',
      'features/faculty/pages/EnterMarks.jsx',
      'features/faculty/pages/FacultyAnalytics.jsx',
      'features/student/pages/StudentDashboard.jsx',
      'features/student/pages/MyPerformance.jsx',
      'features/student/pages/MyAttendance.jsx',
      'features/student/pages/MyResults.jsx',
      'features/student/pages/MyRecommendations.jsx',
      'features/students/pages/StudentList.jsx',
      'features/students/pages/StudentDetails.jsx',
      'features/students/pages/AddStudent.jsx',
      'features/students/pages/EditStudent.jsx',
      'features/ai-insights/pages/AIInsightsPage.jsx',
      'features/ai-assistant/pages/AIAssistantPage.jsx'
    ];

    requiredPages.forEach((relPath) => {
      const fullPath = path.join(clientSrcDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Missing required page component: ${relPath}`);
      const content = fs.readFileSync(fullPath, 'utf-8');
      assert.match(content, /export (default|function|const)/, `Component does not have export: ${relPath}`);
    });
  });

  test('All AI and Analytics UI components must exist and export properly', () => {
    const aiComponents = [
      'components/ai/AIChatWindow.jsx',
      'components/ai/AIExplanation.jsx',
      'components/ai/AIInsightCard.jsx',
      'components/ai/PredictionCard.jsx',
      'components/ai/RecommendationCard.jsx',
      'components/ai/RiskBadge.jsx',
      'components/charts/AttendanceChart.jsx',
      'components/charts/PerformanceChart.jsx',
      'components/charts/RiskDistributionChart.jsx',
      'components/charts/BarChart.jsx',
      'components/charts/LineChart.jsx',
      'components/charts/PieChart.jsx',
      'components/charts/AreaChart.jsx'
    ];

    aiComponents.forEach((relPath) => {
      const fullPath = path.join(clientSrcDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Missing AI/Chart component: ${relPath}`);
    });
  });

  test('All common foundational UI components must exist', () => {
    const commonComponents = [
      'components/common/Button.jsx',
      'components/common/Input.jsx',
      'components/common/Select.jsx',
      'components/common/Modal.jsx',
      'components/common/Loader.jsx',
      'components/common/EmptyState.jsx',
      'components/common/ErrorState.jsx',
      'components/common/PageHeader.jsx',
      'components/common/Pagination.jsx',
      'components/common/SearchBar.jsx',
      'components/common/Skeleton.jsx',
      'components/common/ConfirmDialog.jsx'
    ];

    commonComponents.forEach((relPath) => {
      const fullPath = path.join(clientSrcDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Missing common component: ${relPath}`);
    });
  });

  test('Responsive design stylesheets must include cross-device media queries', () => {
    const responsiveCss = path.join(clientSrcDir, 'assets', 'styles', 'responsive.css');
    assert.ok(fs.existsSync(responsiveCss), 'responsive.css stylesheet missing');
    const content = fs.readFileSync(responsiveCss, 'utf-8');

    // Desktop, Laptop, Tablet, Mobile breakpoints
    assert.match(content, /@media/i);
    assert.match(content, /(max-width|min-width)/i);
  });

  test('Material UI theme configuration must specify institutional palette and typography', () => {
    const muiTheme = path.join(clientSrcDir, 'styles', 'muiTheme.js');
    const themeJs = path.join(clientSrcDir, 'styles', 'theme.js');
    assert.ok(fs.existsSync(muiTheme), 'muiTheme.js missing');
    assert.ok(fs.existsSync(themeJs), 'theme.js missing');
    const muiContent = fs.readFileSync(muiTheme, 'utf-8');
    const themeContent = fs.readFileSync(themeJs, 'utf-8');
    assert.match(muiContent, /createTheme/);
    assert.match(muiContent, /palette/);
    assert.match(themeContent, /primary/);
  });
});
