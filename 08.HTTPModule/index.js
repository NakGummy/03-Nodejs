import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("03-Nodejs/public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });

    res.write("<h1>Home</h1>");
    res.write("<h1>Home</h1>");
    res.write("<h1>Home</h1>");
    res.write("<h1>Home</h1>");
    res.write("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>about</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>contact</h1>");
  } else {
    res.writeHead(
      404,
      "jyhewfjhgsdbhjrsgfdekjlhgrhwiuoghrewughreigouerhgiureiuhh",
      { "Content-Type": "text/html" }
    );
    res.write("<h1>404</h1>");
  }
});

server.listen(8080, () => {
  console.log("Server is up");
});
