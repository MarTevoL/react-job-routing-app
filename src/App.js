import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SearchAppBar from "./components/SearchAppBar";
import LoginPage from "./pages/LoginPage";
import GridJobCard from "./components/GridJobCard";
import JobDetailModal from "./components/JobDetailModal";
import useAuth from "./auth/useAuth";
import Home from "./components/Home";
import LoginModal from "./components/LoginModal";

function App() {
  const auth = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {auth.user ? (
        <Routes>
          <Route path="/job/:Id" element={<JobDetailModal />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/:Id" element={<LoginModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
