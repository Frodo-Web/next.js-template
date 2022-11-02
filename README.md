# next.js-template
## How does the config work
config/index.js:
````
const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://localhost:3001' : 'none'
// Use local data when building because there is no API server running
````
## Build and run on localhost using next
````
npm run build
npm run start // Will run on port 3000
````
## Build and Export
Use npm run buildExport instead of npm run build:
````
npm run buildExport
````
## After export run on localhost using serve
````
npm run serve

// Output:
> next.js-template@1.0.0 serve
> serve -s out -p 8000


   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:8000       │
   │   - On Your Network:  http://192.168.0.101:8000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
````
