
import React from 'react'
import { useParams } from 'react-router-dom'

export default function ChallengeDetail() {
  const { id } = useParams()

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">📘 Задача #{id}</h1>
      <p className="text-gray-700 mb-6">
        Тут буде повний опис задачі, приклади введення/виводу і можливість надіслати розвʼязок.
      </p>
      <div className="p-4 border rounded bg-gray-50 text-sm text-gray-600">
        *Інтерфейс для GPT або редактор коду можна інтегрувати тут*
      </div>
    </div>
  )
}
