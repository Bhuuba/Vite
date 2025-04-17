import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const mockUsers = [
  { username: "alice", solved: 120 },
  { username: "bob", solved: 110 },
  { username: "charlie", solved: 95 },
  { username: "diana", solved: 90 },
  { username: "eric", solved: 85 },
];

const features = [
  {
    title: "Швидкий старт",
    description: "Почніть розв'язувати задачі прямо зараз",
    icon: "⚡",
  },
  {
    title: "AI Підтримка",
    description: "Задачі генеруються за допомогою GPT-4",
    icon: "🤖",
  },
  {
    title: "Рейтинг",
    description: "Змагайтеся з іншими розробниками",
    icon: "🏆",
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-10 text-center"
    >
      <motion.h1
        className="text-6xl font-extrabold text-gradient mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        CodeClash
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Випробуй себе в алгоритмічних батлах! Прокачай мозок, піднімайся в топ і
        розвʼязуй задачі.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-6 mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="content-glass p-6 hover-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i + 0.8 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gradient">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gradient">
          🚀 Топ учасників
        </h2>
        <div className="content-glass overflow-hidden">
          {mockUsers.map((user, i) => (
            <motion.div
              key={user.username}
              className="p-4 flex justify-between hover:bg-white/5 transition"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i + 1.6 }}
            >
              <span className="font-medium text-gray-200">
                {i + 1}. {user.username}
              </span>
              <span className="text-gray-400">{user.solved} задач</span>
            </motion.div>
          ))}
        </div>

        <Link
          to="/challenges"
          className="content-glass hover-card mt-8 inline-block px-8 py-3 text-gradient font-bold"
        >
          Почати Виклик
        </Link>
      </motion.div>
    </motion.div>
  );
}
