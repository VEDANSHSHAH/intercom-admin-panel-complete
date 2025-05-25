import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
    </Routes>
  );
}