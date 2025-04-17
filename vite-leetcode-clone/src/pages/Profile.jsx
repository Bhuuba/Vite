
import React from 'react'

const solvedTasks = [
  { id: 1, title: 'Знайти максимум у масиві' },
  { id: 2, title: 'Зворотній порядок рядка' },
  { id: 3, title: 'Паліндром чи ні' }
]

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">👤 Мій профіль</h1>
      <div className="bg-white rounded-xl shadow p-6 border">
        <h2 className="text-xl font-semibold mb-4">Виконані задачі</h2>
        <ul className="list-disc pl-6 space-y-2">
          {solvedTasks.map(task => (
            <li key={task.id} className="text-gray-700">{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
