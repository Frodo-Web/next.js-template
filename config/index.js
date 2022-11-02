const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3001' : 'none'

// dev - at npm run dev
// production - at npm run build