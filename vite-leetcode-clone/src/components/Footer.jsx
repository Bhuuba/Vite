
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeClash. Created with 💙 for developers who love challenges.
      </div>
    </footer>
  )
}
