import { ReactNode } from 'react';
import { Reveal } from 'react-awesome-reveal';
import 'animate.css/animate.min.css';

interface SlideInProps {
  children: ReactNode;
}

function SlideIn({ children }: SlideInProps) {
  return (
    <Reveal
      className="animate__animated animate__fadeInLeft animate__delay-30s"
      triggerOnce
    >
      {children}
    </Reveal>
  );
}

export default SlideIn;
