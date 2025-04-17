import React from "react";
import { motion } from "framer-motion";

const solvedTasks = [
  {
    id: 1,
    title: "Знайти максимум у масиві",
    difficulty: "easy",
    date: "2024-04-15",
  },
  {
    id: 2,
    title: "Зворотній порядок рядка",
    difficulty: "easy",
    date: "2024-04-14",
  },
  { id: 3, title: "Паліндром чи ні", difficulty: "medium", date: "2024-04-13" },
  { id: 4, title: "Бінарний пошук", difficulty: "medium", date: "2024-04-12" },
  {
    id: 5,
    title: "Сортування злиттям",
    difficulty: "hard",
    date: "2024-04-11",
  },
];

const stats = [
  { label: "Вирішено задач", value: "42" },
  { label: "Поточний ранг", value: "Експерт" },
  { label: "Днів поспіль", value: "7" },
  { label: "Найкраща серія", value: "15" },
];

export default function Profile() {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="content-glass p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full content-glass flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Ваш Профіль
            </h1>
            <p className="text-gray-400">
              Продовжуйте розвиватися та вирішувати нові задачі!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="content-glass p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="text-2xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="content-glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold text-gradient">
            Виконані задачі
          </h2>
        </div>
        <div className="divide-y divide-white/10">
          {solvedTasks.map((task, index) => (
            <motion.div
              key={task.id}
              className="p-4 flex items-center justify-between hover:bg-white/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <div>
                <h3 className="font-medium text-gray-200 mb-1">{task.title}</h3>
                <div className="text-sm text-gray-400">{task.date}</div>
              </div>
              <span
                className={`text-sm px-3 py-1 rounded-full content-glass
                ${
                  task.difficulty === "easy"
                    ? "text-green-400"
                    : task.difficulty === "medium"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {task.difficulty}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
