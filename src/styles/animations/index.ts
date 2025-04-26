import { keyframes } from 'styled-components';

export const shake = keyframes`
	0%  { 
		transform: translate(2px, 1px) rotate(0deg); 
	}
  10% { 
		transform: translate(-1px, -2px) rotate(-2deg); 
	}
  20% { 
		transform: translate(-3px, 0px) rotate(3deg);
	}
  30% { 
		transform: translate(0px, 2px) rotate(0deg);
	}
  40% { 
		transform: translate(1px, -1px) rotate(1deg); 
	}
  50% { 
		transform: translate(-1px, 2px) rotate(-1deg);
	}
  60% { 
		transform: translate(-3px, 1px) rotate(0deg);
	}
  70% { 
		transform: translate(2px, 1px) rotate(-2deg);
	}
  80% { 
		transform: translate(-1px, -1px) rotate(4deg);
	}
  90% { 
		transform: translate(2px, 2px) rotate(0deg);
	}
  100%{ 
		transform: translate(1px, -2px) rotate(-1deg);
	}
`;

export const neonPulse = keyframes`
  0% {
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FF00FF, 0 0 35px #FF00FF, 0 0 40px #FF00FF, 0 0 50px #FF00FF;
  }
  100% {
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FF00FF, 0 0 35px #FF00FF, 0 0 40px #FF00FF, 0 0 50px #FF00FF;
  }
`;

export const scanlines = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
`;

export const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff, 0.025em 0.05em 0 #fffc00;
  }
  14% {
    text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff, 0.025em 0.05em 0 #fffc00;
  }
  15% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00;
  }
  99% {
    text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00;
  }
  100% {
    text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff, -0.025em -0.05em 0 #fffc00;
  }
`;

export const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0.99;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.4;
  }
`;

export const matrixRain = keyframes`
  0% {
    top: -100px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 0.7;
  }
  100% {
    top: 1200px;
    opacity: 0;
  }
`;

export const borderGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;
  }
  50% {
    box-shadow: 0 0 20px #FF00FF, 0 0 30px #FF00FF;
  }
`;

export const enhancedNeonPulse = keyframes`
  0% {
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FF00DD, 0 0 35px #FF00DD, 0 0 40px #FF00DD, 0 0 50px #FF00DD, 0 0 60px #FF00DD;
  }
  100% {
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FF00DD, 0 0 35px #FF00DD, 0 0 40px #FF00DD, 0 0 50px #FF00DD, 0 0 70px #FF00DD;
  }
`;

export const enhancedGlitch = keyframes`
  0% {
    text-shadow: 0.08em 0 0 #00DDFF, -0.08em -0.04em 0 #FF00DD, 0.04em 0.08em 0 #DDDD00;
  }
  14% {
    text-shadow: 0.08em 0 0 #00DDFF, -0.08em -0.04em 0 #FF00DD, 0.04em 0.08em 0 #DDDD00;
  }
  15% {
    text-shadow: -0.08em -0.04em 0 #00DDFF, 0.04em 0.04em 0 #FF00DD, -0.08em -0.08em 0 #DDDD00;
  }
  49% {
    text-shadow: -0.08em -0.04em 0 #00DDFF, 0.04em 0.04em 0 #FF00DD, -0.08em -0.08em 0 #DDDD00;
  }
  50% {
    text-shadow: 0.04em 0.08em 0 #00DDFF, 0.08em 0 0 #FF00DD, 0 -0.08em 0 #DDDD00;
  }
  99% {
    text-shadow: 0.04em 0.08em 0 #00DDFF, 0.08em 0 0 #FF00DD, 0 -0.08em 0 #DDDD00;
  }
  100% {
    text-shadow: -0.04em 0 0 #00DDFF, -0.04em -0.04em 0 #FF00DD, -0.04em -0.08em 0 #DDDD00;
  }
`;
