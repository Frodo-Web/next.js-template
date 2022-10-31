# next.js-template
## How the config works
config/index.js:
````
const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://localhost:3001' : 'http://localhost:3001'
// 'http://localhost:3001' will be used when dev server is running (npm run dev)
// 'http://localhost:3001' will be used by npm run build command when dev server is running
// It is necessary to provide access to /src/pages/api data
````
## To make src/pages/api provide the data at build, run dev server first then build:
````
npm run dev // Will run on port 3001
npm run build

````
## Run on localhost using next
````
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
