import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
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

        {auth.user ? (
          <Route path="/job/:Id" element={<JobDetailModal />} />
        ) : (
          <Route path="/:Id" element={<LoginModal />} />
        )}
      </Routes>
    </>
  );
}

export default App;
