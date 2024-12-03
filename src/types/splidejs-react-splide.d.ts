// src/types/splidejs-react-splide.d.ts
declare module '@splidejs/react-splide' {
  import * as React from 'react';

  interface SplideProps {
    options?: any;
    hasTrack?: boolean;
    tag?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode; // Adicionei children aqui
  }

  export class Splide extends React.Component<SplideProps> {}
  export class SplideSlide extends React.Component {}
}
