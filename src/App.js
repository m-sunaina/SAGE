// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage";
import UserLogin from "./Userlogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
