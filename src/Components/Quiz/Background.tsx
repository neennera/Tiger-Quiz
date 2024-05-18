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
    const randomLeft = Math.random() * 90;
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
  return (
    <div id="container" className="absolute m-0 p-0 w-full h-full">
      <div className=" opacity-20 absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:25px_25px]"></div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100vw 100vh"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="url(#paint0_diamond_1_11)" />
        <defs>
          <radialGradient
            id="paint0_diamond_1_11"
            cx="0.5"
            cy="0.5"
            r="0.5"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0.7 0.2) rotate(80) scale(0.6 0.53)"
          >
            <stop stop-color="#C72E2E" />
            <stop offset="1" stop-color="#6D1A1A" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Background;
