import DashboardLayout from "./components/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </Layout>
  );
}
