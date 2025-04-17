
import React from 'react'
import { Link } from 'react-router-dom'

const challenges = [
  { id: 1, title: 'Сума двох чисел', level: 'easy' },
  { id: 2, title: 'Бінарний пошук', level: 'medium' },
  { id: 3, title: 'Граф DFS', level: 'hard' }
]

const levelColors = {
  easy: 'text-green-600',
  medium: 'text-yellow-600',
  hard: 'text-red-600'
}

export default function Challenges() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">🧩 Всі задачі</h1>
      <div className="bg-white rounded-xl shadow divide-y border">
        {challenges.map((ch) => (
          <Link
            key={ch.id}
            to={`/challenges/${ch.id}`}
            className="block px-6 py-4 hover:bg-gray-50 transition"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{ch.title}</span>
              <span className={`text-sm font-semibold ${levelColors[ch.level]}`}>
                {ch.level}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
