
import React from 'react'
import { motion } from 'framer-motion'

const mockUsers = [
  { username: 'alice', solved: 120 },
  { username: 'bob', solved: 110 },
  { username: 'charlie', solved: 95 },
  { username: 'diana', solved: 90 },
  { username: 'eric', solved: 85 },
  { username: 'frank', solved: 80 },
  { username: 'grace', solved: 75 },
  { username: 'hannah', solved: 72 },
  { username: 'ivan', solved: 70 },
  { username: 'julia', solved: 68 }
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-10 text-center"
    >
      <motion.h1
        className="text-6xl font-extrabold text-blue-600 mb-4 drop-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        CodeClash
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Випробуй себе в алгоритмічних батлах! Прокачай мозок, піднімайся в топ і розвʼязуй задачі, згенеровані GPT-4 Turbo.
      </motion.p>

      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        🚀 Топ 10 учасників
      </motion.h2>

      <motion.div
        className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <ul className="divide-y divide-gray-100 text-left">
          {mockUsers.map((user, i) => (
            <li key={user.username} className="p-4 flex justify-between hover:bg-gray-50 transition">
              <span className="font-medium">{i + 1}. {user.username}</span>
              <span className="text-gray-500">{user.solved} задач</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
