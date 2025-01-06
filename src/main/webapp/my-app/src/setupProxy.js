const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/PetCam',
        createProxyMiddleware({
            target: 'http://localhost:8080', // 실제 백엔드 서버 주소
            changeOrigin: true,
        })
    );
};
