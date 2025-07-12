import React, { useState } from 'react';
import pic from "../assets/photoid.png";
import PixelTransition from '../ui/PixelTransition';

const fortunes = [
  "🚀 Today’s deploy won’t need a hotfix. Hopefully.",
  "🐛 That bug is afraid of you now.",
  "🎨 Your UI is cleaner than your browser history.",
  "⏳ Good things come to those who async/await.",
  "💡 The next big idea is already loading...",
  "🤝 Your code review will get a thumbs up. First try.",
  "🔍 The bug hides in plain sight. So does the fix.",
  "🔥 Today, you write code that future you won’t hate.",
  "📦 NPM install your confidence. You’ve got this.",
  "✨ One pixel at a time, greatness is built.",
  "🧠 Console.log your thoughts — they make sense.",
  "📘 Somewhere in the docs lies your salvation.",
  "⚙️ You’re just one save away from brilliance."
];

function Photo() {
  const [quote, setQuote] = useState(fortunes[0]);

  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newQuote = fortunes[randomIndex];
    setQuote(newQuote);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <PixelTransition
        firstContent={
          <img
            src={pic}
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        }
        secondContent={
          <div className="w-full h-full grid place-items-center bg-blue-600 px-4 text-center">
            <p className="text-4xl font-bold text-yellow-400 ">{quote}</p>
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="w-[250px] h-[330px] rounded-lg shadow-md"
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
}

export default Photo;