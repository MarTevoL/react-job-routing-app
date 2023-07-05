import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SearchAppBar from "./components/SearchAppBar";
import LoginPage from "./pages/LoginPage";
import GridJobCard from "./components/GridJobCard";
import JobDetailModal from "./components/JobDetailModal";
import useAuth from "./auth/useAuth";
import Home from "./components/Home";

function App() {
  const auth = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":Id" element={<JobDetailModal />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
