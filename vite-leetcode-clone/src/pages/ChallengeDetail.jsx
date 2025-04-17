import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const mockChallenge = {
  id: 1,
  title: "Сума двох чисел",
  difficulty: "easy",
  description: `Дано масив цілих чисел nums та ціль target. 
  Поверніть індекси двох чисел з масиву, сума яких дорівнює target.
  Припустимо, що існує рівно один розв'язок, і не можна використовувати один елемент двічі.`,
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "2 + 7 = 9, тому повертаємо [0,1]",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "2 + 4 = 6, тому повертаємо [1,2]",
    },
  ],
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
  ],
};

export default function ChallengeDetail() {
  const { id } = useParams();
  const [code, setCode] = useState("");

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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              {mockChallenge.title}
            </h1>
            <span
              className={`text-sm px-3 py-1 rounded-full content-glass
              ${
                mockChallenge.difficulty === "easy"
                  ? "text-green-400"
                  : mockChallenge.difficulty === "medium"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {mockChallenge.difficulty}
            </span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">{mockChallenge.description}</p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gradient mb-4">
              Приклади
            </h2>
            <div className="space-y-4">
              {mockChallenge.examples.map((example, index) => (
                <motion.div
                  key={index}
                  className="content-glass p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <div className="font-mono text-sm">
                    <div className="text-gray-400 mb-2">
                      Input: {example.input}
                    </div>
                    <div className="text-gray-200 mb-2">
                      Output: {example.output}
                    </div>
                    {example.explanation && (
                      <div className="text-gray-400">
                        Explanation: {example.explanation}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-gradient mb-4">
              Обмеження
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {mockChallenge.constraints.map((constraint, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.7 }}
                >
                  <code className="text-sm bg-white/10 rounded px-2 py-1">
                    {constraint}
                  </code>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="content-glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-gradient">Ваш розв'язок</h2>
        </div>
        <div className="p-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 bg-white/5 text-gray-200 font-mono p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="// Введіть ваш код тут..."
          />
          <button
            className="mt-4 content-glass hover-card px-6 py-2 text-gradient font-bold"
            onClick={() => console.log("Відправити розв'язок")}
          >
            Надіслати
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
