import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
const API_ENDPOINT = 'https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/cities', createProxyMiddleware({
  target: API_ENDPOINT,
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

app.use(express.static(path.join(__dirname, '../dist')));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`)
})
