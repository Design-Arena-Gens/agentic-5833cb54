'use client';

import { useState } from 'react';
import './styles.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
  { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: "Aristotle" },
  { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" }
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [fadeClass, setFadeClass] = useState('');

  const getRandomQuote = () => {
    setFadeClass('fade-out');

    setTimeout(() => {
      let newQuote;
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote.text === currentQuote.text && quotes.length > 1);

      setCurrentQuote(newQuote);
      setFadeClass('fade-in');
    }, 300);
  };

  const shareQuote = async () => {
    const text = `"${currentQuote.text}" - ${currentQuote.author}`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (err) {
        copyToClipboard(text);
      }
    } else {
      copyToClipboard(text);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Quote copied to clipboard!');
    });
  };

  return (
    <div className="container">
      <div className="quote-card">
        <h1 className="title">✨ Daily Motivation</h1>

        <div className={`quote-content ${fadeClass}`}>
          <p className="quote-text">"{currentQuote.text}"</p>
          <p className="quote-author">— {currentQuote.author}</p>
        </div>

        <div className="button-group">
          <button onClick={getRandomQuote} className="btn btn-primary">
            New Quote
          </button>
          <button onClick={shareQuote} className="btn btn-secondary">
            Share
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>Get inspired every day 💪</p>
      </footer>
    </div>
  );
}
