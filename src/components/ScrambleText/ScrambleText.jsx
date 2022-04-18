import React, { useEffect, useRef } from 'react';
import { scrambleText } from './scramble-text.module.scss';

export default function ScrambleText() {
  const el = useRef(null);

  function getRandomCharacter() {
    const chars = ['!', '@', '#', '$', '%', '&', '*'];
    const let1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const let2 = ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];
    const let3 = ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const allChars = chars + let1 + let2 + let3 + nums;
    return allChars[Math.floor(Math.random() * allChars.length)];
  }

  useEffect(() => {
    const ogText = el.current.innerText;
    const arr = ogText.split('');
    el.current.innerHTML = '';
    arr.forEach((char, index) => {
      setTimeout(() => {
        setTimeout(() => {
          const span = document.createElement('span');
          span.innerHTML = getRandomCharacter();
          el.current.append(span);
          setTimeout(() => {
            span.innerHTML = '';
            const ogChar = document.createElement('span');
            ogChar.innerHTML = arr[index];
            el.current.append(ogChar);
            if (index === arr.length - 1) {
              el.current.innerHTML = ogText;
            }
          }, 80);
        }, index * 100);
      }, 1000);
    });
  });

  return (
    <p className={scrambleText} ref={el}>
      Hello, nurse!
    </p>
  );
}
