import React, { useEffect, useRef } from 'react';

export default function ScrambleText({ children }) {
  const el = useRef(null);
  let runOnce = false;

  function getRandomCharacter() {
    const chars = ['!', '@', '#', '$', '%', '&', '*'];
    const let1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const let2 = ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];
    const let3 = ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const allChars = chars + let1 + let2 + let3 + nums;
    return allChars[Math.floor(Math.random() * allChars.length)];
  }

  function checkScroll() {
    if (!runOnce) {
      if (window.innerHeight * 0.6 > el.current.getBoundingClientRect().top) {
        el.current.style.visibility = 'visible';
        const ogText = el.current.innerText;
        const arr = ogText.split('');
        el.current.innerHTML = '';
        arr.forEach((char, index) => {
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
            }, 40);
          }, index * 50);
        });
        runOnce = true;
      }
    }
  }

  useEffect(() => {
    el.current.style.visibility = 'hidden';
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });

  return <span ref={el}>{children}</span>;
}
