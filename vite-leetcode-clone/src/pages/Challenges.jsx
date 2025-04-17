import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const challenges = [
  {
    id: 1,
    title: "Сума двох чисел",
    level: "easy",
    description: "Знайдіть суму двох чисел в масиві",
  },
  {
    id: 2,
    title: "Бінарний пошук",
    level: "medium",
    description: "Реалізуйте алгоритм бінарного пошуку",
  },
  {
    id: 3,
    title: "Граф DFS",
    level: "hard",
    description: "Обхід графа в глибину",
  },
  {
    id: 4,
    title: "Паліндром",
    level: "easy",
    description: "Перевірте, чи є рядок паліндромом",
  },
  {
    id: 5,
    title: "Динамічне програмування",
    level: "hard",
    description: "Задача про рюкзак",
  },
];

const levelColors = {
  easy: "from-green-400 to-green-600",
  medium: "from-yellow-400 to-yellow-600",
  hard: "from-red-400 to-red-600",
};

const levelIcons = {
  easy: "🟢",
  medium: "🟡",
  hard: "🔴",
};

export default function Challenges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <motion.h1
        className="text-4xl font-bold text-gradient mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🧩 Алгоритмічні Задачі
      </motion.h1>

      <motion.div
        className="grid gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {challenges.map((ch, index) => (
          <motion.div
            key={ch.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              to={`/challenges/${ch.id}`}
              className="content-glass block p-6 hover-card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gradient">
                    {ch.title}
                  </h3>
                  <p className="text-gray-400">{ch.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg" title={ch.level}>
                    {levelIcons[ch.level]}
                  </span>
                  <span
                    className={`text-sm font-medium bg-gradient-to-r ${
                      levelColors[ch.level]
                    } bg-clip-text text-transparent`}
                  >
                    {ch.level}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
