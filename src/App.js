"use client";

import React, { useState, useRef, useEffect } from "react";

export default function TypingOverlay() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [targetQuote, setTargetQuote] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Load quotes once
  useEffect(() => {
    fetch("/quotes.txt")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} – couldn't load quotes.txt`);
        return res.text();
      })
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setQuotes(lines);
      })
      .catch(console.error);
  }, []);

  // Whenever quotes or index changes, update the target and reset
  useEffect(() => {
    if (quotes.length > 0) {
      setTargetQuote(quotes[currentQuoteIndex]);
      setUserInput("");
      setIsFinished(false);
    }
  }, [quotes, currentQuoteIndex]);

  // Handle keystrokes
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= targetQuote.length) {
      setUserInput(value);
      if (value === targetQuote) {
        setIsFinished(true);
      }
    }
  };

  // Advance to next quote
  const getNewQuote = () => {
    setCurrentQuoteIndex((i) => (i + 1) % quotes.length);
    // refocus input after state update
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // Focus hidden input when container clicked
  const focusInput = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  // Hide cursor if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-2xl mb-4 text-center">seths favorite quotes</h1>

        <div
          ref={containerRef}
          className="relative mb-4 p-6 rounded-lg border-2 min-h-[150px] flex items-center justify-center cursor-text"
          onClick={focusInput}
        >
          <div className="text-lg leading-relaxed tracking-wide">
            {targetQuote.split("").map((char, idx) => {
              const isTyped    = idx < userInput.length;
              const userChar   = userInput[idx];
              const isCorrect  = isTyped && userChar === char;
              const isSpace    = char === " ";

              const showCursor = idx === userInput.length && isFocused && !isFinished;
              let classes = "relative inline-block font-medium ";

              if (!isTyped) {
                classes += "text-gray-400 ";
              } else if (isCorrect) {
                if (isSpace) {
                  classes += "bg-green-200 ";      
                } else {
                  classes += "bg-green-200 ";
                  classes += "text-green-500 ";
                }
              } else {
                if (isSpace) {
                  classes += "bg-red-200 ";        
                } else {
                  classes += "bg-red-200 ";        
                  classes += "text-red-500 ";
                }
              }

              if (isSpace) {
                classes += "w-2 ";
              }

              return (
                <span key={idx} className={classes}>
                  {isSpace ? "\u00A0" : char}
                  {showCursor && (
                    <span
                      className="absolute bottom-0 left-0 w-[2px] h-[1.2em] bg-black animate-pulse"
                    />
                  )}
                </span>
              );
            })}
          </div>

          {/* Hidden overlay input */}
          <input
            ref={inputRef}
            type="text"
            className="opacity-0 absolute top-0 left-0 h-full w-full cursor-default"
            value={userInput}
            onChange={handleInputChange}
            disabled={isFinished}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {isFinished && (
          <div className="flex justify-center">
            <button
              onClick={getNewQuote}
              className="px-4 py-2 bg-white text-black rounded-md hover:shadow-md transition-colors border-2"
            >
              next quote
            </button>
          </div>
        )}

        {!isFinished && (
          <div className="text-center text-sm text-gray-500 mt-2">
            {isFocused
              ? "type the text above..."
              : "click on the text to start typing..."}
          </div>
        )}
      </div>
    </div>
  );
}
