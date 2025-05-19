# Letter Search *React*

Enter the letter and get number of cities beginning with it.

### Prerequisites
- **node.js** v20.19.2+
- **npm** v10.8.2+

After cloning this repository run `npm install` in the root directory.

### How to run

### 🎨 `npm run dev`

That will run the application in serverless mode using Vite scripts and proxy configuration. It will serve the application on `http://localhost:5173/`

### 🏗️ `npm run dev:server`

That will run the application using Express server. It has two modes dependent on environment. Once you run this command you can develop your app using preview on `http://localhost:3000`. \
The other mode is for running app on production ⬇️

### Production Build

1. Run `npm run build`
2. Run `npm run build:server`
3. Run `npm start`

#### Proxy Api

Running in localhost requires proxy configuration in Vite config to overcome CORS issues with given API endpoint. Check out `vite.config.ts` to see the proxy setup.

