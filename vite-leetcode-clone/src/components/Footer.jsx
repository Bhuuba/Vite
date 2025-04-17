import React from "react";

export default function Footer() {
  return (
    <footer className="content-glass mt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CodeClash. Створено з 💙 для розробників,
        які люблять виклики.
      </div>
    </footer>
  );
}
