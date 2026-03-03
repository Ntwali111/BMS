import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BondsPage from "./pages/BondsPage";
import TrainingsPage from "./pages/TrainingsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BondsPage />} />
        <Route path="/bonds" element={<BondsPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
