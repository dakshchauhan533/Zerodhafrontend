// filepath: /c:/Users/chauh/Desktop/projects/Zerodha/frontend/src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/dashboard",
    createProxyMiddleware({
      target: "http://localhost:3001", // Replace with your dashboard server URL
      changeOrigin: true,
    })
  );
};
