import React from "react";
import { motion } from "framer-motion";

const mockUsers = [
  { username: "alice", solved: 120, rank: "Майстер", avatar: "👑" },
  { username: "bob", solved: 110, rank: "Експерт", avatar: "🎯" },
  { username: "charlie", solved: 95, rank: "Професіонал", avatar: "⭐" },
  { username: "diana", solved: 90, rank: "Професіонал", avatar: "⭐" },
  { username: "eric", solved: 85, rank: "Досвідчений", avatar: "🎮" },
  { username: "frank", solved: 80, rank: "Досвідчений", avatar: "🎮" },
  { username: "grace", solved: 75, rank: "Середній", avatar: "🎲" },
  { username: "hannah", solved: 72, rank: "Середній", avatar: "🎲" },
];

export default function Leaderboard() {
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
        🏆 Рейтинг Учасників
      </motion.h1>

      <motion.div
        className="content-glass overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr className="text-sm text-gray-400">
              <th className="px-6 py-4 text-left">Місце</th>
              <th className="px-6 py-4 text-left">Користувач</th>
              <th className="px-6 py-4 text-left">Ранг</th>
              <th className="px-6 py-4 text-left">Задачі</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {mockUsers.map((user, index) => (
              <motion.tr
                key={user.username}
                className="hover:bg-white/5 transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <td className="px-6 py-4">
                  <span className="text-gradient font-bold">#{index + 1}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{user.avatar}</span>
                    <span className="font-medium text-gray-200">
                      {user.username}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gradient">{user.rank}</span>
                </td>
                <td className="px-6 py-4 text-gray-400">{user.solved}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
