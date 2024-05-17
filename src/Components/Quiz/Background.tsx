import { useEffect } from 'react';

const createFallingText = () => {
  const container = document.getElementById('container');
  const textElement = document.createElement('p');
  const text = '🐅';
  textElement.classList.add('falling-text');
  textElement.innerText = text;
  textElement.classList.add('text-2xl');
  textElement.classList.add('opacity-40');

  if (container) {
    // random position
    const randomLeft = Math.random() * 95;
    textElement.style.left = `${randomLeft}vw`;
    container.appendChild(textElement);

    // Remove the element after it finishes the animation
    textElement.addEventListener('animationend', () => {
      container.removeChild(textElement);
    });
  }
};

const Background = () => {
  useEffect(() => {
    const interval = setInterval(createFallingText, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div id="container" className="absolute m-0 p-0 w-full h-full"></div>;
};

export default Background;
