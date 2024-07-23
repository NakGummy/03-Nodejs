import path from "path";

console.log(path.basename("c:\\nodejs\\app.html"));
console.log(path.basename("c:\\nodejs\\app.js", ".js"));
console.log(path.dirname("c:\\nodejs\\app.js"));

console.log(path.extname("c:\\nodejs\\courses\\app.js"));
console.log(path.join("c:", "huxn-dev", "courses", "redux-toolkit", ".."));
console.log(
  path.join("c:", "huxn-dev", "courses", "redux-toolkit", "..", ".. ")
);

console.log(
  path.normalize(
    "c:\\iujsdh\\sdfggf\\fsd\\\\\\gfwseds\\\\\\\\\\fwsesikujgfhwer"
  )
);

console.log(path.parse("c:\\nodejs\\course\\app.js").base);
console.log(path.parse("c:\\nodejs\\course\\app.js").name);
console.log(path.parse("c:\\nodejs\\course\\app.js").ext);
console.log(path.parse("c:\\nodejs\\course\\\\\\app.js"));
