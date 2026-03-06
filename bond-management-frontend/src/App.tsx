import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import BondsPage from "./pages/BondsPage";
import TrainingsPage from "./pages/TrainingsPage";
import EmployeesPage from "./pages/EmployeesPage";

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route
        path="/bonds"
        element={
          <ProtectedRoute>
            <Layout>
              <BondsPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/trainings"
        element={
          <ProtectedRoute>
            <Layout>
              <TrainingsPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <Layout>
              <EmployeesPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <BondsPage />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
