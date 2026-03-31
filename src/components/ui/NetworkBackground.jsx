"use client";
import React from 'react';
import './OrbitAnimation.css';

<<<<<<<< HEAD:src/components/ui/NetworkBackground.jsx
export default function NetworkBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
========
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faTerminal, faCog, faCube, faMicrochip, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
>>>>>>>> 6ec276c971e1d033f6400b0149ed686a71dd7b04:src/components/Home/OrbitAnimation.jsx

const OrbitAnimation = () => {
  const icons = [
    { icon: faCodeBranch, color: '#FF4172', top: '15%', left: '10%', size: '24px', blur: '2px', duration: '20s' },
    { icon: faTerminal, color: '#27c93f', top: '65%', left: '15%', size: '32px', blur: '0px', duration: '25s' },
    { icon: faCog, color: '#40a9ff', top: '25%', right: '20%', size: '40px', blur: '4px', duration: '30s' },
    { icon: faCube, color: '#FF4172', bottom: '20%', right: '10%', size: '20px', blur: '1px', duration: '18s' },
    { icon: faMicrochip, color: '#ffffff', top: '45%', left: '80%', size: '28px', blur: '3px', duration: '35s' },
    { icon: faShieldAlt, color: '#27c93f', bottom: '15%', left: '45%', size: '22px', blur: '0px', duration: '22s' },
  ];

  return (
    <div className="orbit-container">
      {icons.map((item, index) => (
        <div 
          key={index} 
          className="float-wrapper"
          style={{ 
            top: item.top, 
            left: item.left, 
            right: item.right, 
            bottom: item.bottom,
            animationDuration: item.duration,
            filter: `blur(${item.blur})`
          }}
        >
          <FontAwesomeIcon 
            icon={item.icon} 
            style={{ 
              color: item.color, 
              fontSize: item.size, 
              opacity: 0.25 
            }} 
          />
        </div>
      ))}
      <div className="grid-overlay"></div>
    </div>
  );
};

export default OrbitAnimation;
