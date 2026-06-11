import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hotels from './Hotels';
import POSBillingPage from './pages/POSBillingPage';
import KitchenDisplayPage from './pages/KitchenDisplayPage';
import TableManagementPage from './pages/TableManagementPage';
import InventoryPage from './pages/InventoryPage';
import CRMPage from './pages/CRM-LayoutPage';
import ReportsPage from './pages/ReportsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsofServicePage from './pages/TermsofServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/pos" element={<Navigate to="/#modules" replace />} />
        <Route path="/kds" element={<Navigate to="/#modules" replace />} />
        <Route path="/tables" element={<Navigate to="/#modules" replace />} />
        <Route path="/inventory" element={<Navigate to="/#modules" replace />} />
        <Route path="/crm" element={<Navigate to="/#modules" replace />} />
        <Route path="/reports" element={<Navigate to="/#modules" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsofServicePage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
        <Route path="/security" element={<SecurityPage />} />
        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
