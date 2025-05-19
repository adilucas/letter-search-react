# Letter Search *React*

### Prerequisites
- **node.js** v20.19.2+
- **npm** v10.8.2+

### How to run

### `npm run dev`

That will run the application in serverless mode using Vite scripts and proxy configuration. It will serve the application on `http://localhost:5173/`

### `npm run dev:server`

That will run the application using Express server. Note that it will base on files built in `/dist` directory so you need to run `npm run build` each time. Should be used in backend development process.

### Production Build

1. Run `npm run build`
2. Run `npm run build:server`
3. Run `npm start`

#### Proxy Api

Running in localhost requires proxy configuration in Vite config to overcome CORS issues with given API endpoint. Check out `vite.config.ts` to see the proxy setup.

