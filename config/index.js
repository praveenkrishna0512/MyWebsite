const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://praveenkrishna.vercel.app';

// export const server = 'http://localhost:3000'