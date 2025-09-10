import React, { useState, useEffect } from 'react';

const DecryptedText = ({ text, duration = 1000, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    if (!isDecrypted) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      let iteration = 0;

      interval = setInterval(() => {
        setDisplayedText((prev) =>
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) return char;
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iteration += 1 / text.length;

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypted(true);
        }
      }, duration / text.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(text);
      }, duration);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, duration, isDecrypted]);

  return <h1 className={className}>{displayedText}</h1>;
};

export default DecryptedText;