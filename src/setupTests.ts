import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

// Adicionar o polyfill para TextEncoder
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
