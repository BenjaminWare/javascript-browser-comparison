import http from 'http'

const PORT = 3000; // You can choose any port you want

const server = http.createServer(async (req, res) => {
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ msg:"Hello World!"}));
    },1000)
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
