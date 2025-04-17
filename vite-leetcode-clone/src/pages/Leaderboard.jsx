
import React from 'react'

const mockUsers = [
  { username: 'alice', solved: 120 },
  { username: 'bob', solved: 110 },
  { username: 'charlie', solved: 95 },
  { username: 'diana', solved: 90 }
]

export default function Leaderboard() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">🏆 Рейтинг учасників</h1>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4">Місце</th>
              <th className="px-6 py-4">Користувач</th>
              <th className="px-6 py-4">Задачі</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockUsers.map((user, index) => (
              <tr key={user.username} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-semibold">{index + 1}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4 text-gray-500">{user.solved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
