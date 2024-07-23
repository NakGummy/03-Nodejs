import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>Whats good bug</h1>");
  } else {
    res.writeHead(404, "Not Found", { "Content-Type": "text/html" });
    res.write("<h1>404</h1>");
  }
});

server.listen(8080, () => {
  console.log("Server Up");
});
