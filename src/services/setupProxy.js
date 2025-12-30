const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/health',
    createProxyMiddleware({
      target: 'https://cp1.obambu.com',
      changeOrigin: true,
    })
  );
};

