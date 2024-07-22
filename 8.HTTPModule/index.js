import http from "http";

const server = http.createServer((req, res) => {
  console.log(req);

  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404;
  res.statusMessage = "BAD";
  res.write("<h1>Hello, World!</h1>");
});

server.listen(8080, () => {
  console.log("Server running at ");
});
