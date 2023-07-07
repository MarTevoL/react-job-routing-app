import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import JobDetailModal from "./components/JobDetailModal";
import useAuth from "./auth/useAuth";
import Home from "./components/Home";
import LoginModal from "./components/LoginModal";

function App() {
  const auth = useAuth();
  const location = useLocation();
  const state = location.state;
  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      {state && auth.user ? (
        <Routes>
          <Route path="/job/:Id" element={<JobDetailModal />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:Id" element={<LoginModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
