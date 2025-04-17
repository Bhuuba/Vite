import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges";
import ChallengeDetail from "./pages/ChallengeDetail";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="bg-gradient-animated" />
        <div className="bg-shapes">
          <div className="shape" />
          <div className="shape" />
          <div className="shape" />
        </div>
        <div className="relative z-10">
          <Header />
          <main className="content-glass mx-4 my-6 rounded-xl max-w-7xl md:mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/challenges/:id" element={<ChallengeDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
