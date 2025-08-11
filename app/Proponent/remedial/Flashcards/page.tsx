"use client";
import React, { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";

function highlightSentence(sentence: string, highlights: string[]) {
  // Split sentence into words and highlight matches
  const words = sentence.split(/(\s+)/);
  return words.map((word, idx) => {
    const clean = word.replace(/[^a-zA-Z]/g, "");
    if (highlights.includes(clean)) {
      return (
        <span key={idx} className="bg-blue-200 text-blue-700 rounded px-2 mx-0.5 font-semibold">
          {word}
        </span>
      );
    }
    return <span key={idx}>{word}</span>;
  });
}

const flashcardsData = [
  {
    sentence: "The cat sat on the mat.",
    highlights: ["cat", "mat"],
  },
  {
    sentence: "The dog ran fast.",
    highlights: ["dog"],
  },
  {
    sentence: "Birds fly in the sky.",
    highlights: ["Birds", "sky"],
  },
];

export default function FlashcardsPage() {
  const [current, setCurrent] = useState(0);
  const { sentence, highlights } = flashcardsData[current];

  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrent((prev) => Math.min(prev + 1, flashcardsData.length - 1));
  const handleSpeak = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utter = new window.SpeechSynthesisUtterance(sentence);
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-[#fcfcfc] rounded-2xl shadow-lg p-10 w-full max-w-2xl flex flex-col items-center relative">
        <button className="absolute top-6 right-6 text-blue-500 hover:text-blue-700" onClick={handleSpeak} aria-label="Play audio">
          <FaVolumeUp size={24} />
        </button>
        <div className="text-3xl md:text-4xl font-light text-center mb-8 mt-4">{highlightSentence(sentence, highlights)}</div>
        <div className="flex items-center justify-between w-full mt-8">
          <button
            className="bg-blue-600 text-white px-8 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
            onClick={handlePrev}
            disabled={current === 0}
          >
            &#8592; Previous
          </button>
          <div className="flex items-center gap-2">
            {flashcardsData.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full ${i === current ? "bg-blue-600" : "bg-gray-300"}`}
                style={{ display: "inline-block" }}
              />
            ))}
          </div>
          <button
            className="bg-blue-600 text-white px-8 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
            onClick={handleNext}
            disabled={current === flashcardsData.length - 1}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
