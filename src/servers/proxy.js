

module.exports = {
    context: [
        '/api/v0/1905/page',
        '/test'
    ],
    options: {
        target: "http://192.168.2.116:3006/",
        changeOrigin: true,
    }
};