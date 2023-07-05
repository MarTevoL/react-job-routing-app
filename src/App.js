import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SearchAppBar from "./components/SearchAppBar";
import LoginPage from "./pages/LoginPage";
import GridJobCard from "./components/GridJobCard";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <h1>Hello</h1> */}
              <SearchAppBar />
              <GridJobCard />
            </div>
          }
        />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
