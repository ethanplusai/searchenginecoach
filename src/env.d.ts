/// <reference types="astro/client" />

// Vite raw imports
declare module '*.csv?raw' {
  const content: string;
  export default content;
}

declare module '*.svg?raw' {
  const content: string;
  export default content;
}

