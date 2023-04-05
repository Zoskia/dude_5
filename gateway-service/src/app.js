const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;

const dataServiceProxy = createProxyMiddleware('/api/data', {
  target: 'http://dude_data_service:3001',
  pathRewrite: { '^/api/data': '' },
  changeOrigin: true,
});

const userServiceProxy = createProxyMiddleware('/api/user', {
  target: 'http://dude_user_service:3002',
  pathRewrite: { '^/api/user': '' },
  changeOrigin: true,
});

app.use(dataServiceProxy);
app.use(userServiceProxy);

app.get('/', (req, res) => {
  res.send('Gateway running');
});

app.listen(port, () => {
  console.log(`Gateway service listening at http://localhost:${port}`);
});