import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="content-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:opacity-80 transition"
        >
          CodeClash
        </Link>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link to="/challenges" className="hover:text-blue-600 transition">
            Задачі
          </Link>
          <Link to="/leaderboard" className="hover:text-blue-600 transition">
            Рейтинг
          </Link>
          <Link to="/profile" className="hover:text-blue-600 transition">
            Профіль
          </Link>
        </nav>
      </div>
    </header>
  );
}
