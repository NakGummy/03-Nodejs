import fs from "fs";

console.log("start");

let data = fs.readFileSync(
  "C:/NakDev/03-Nodejs/12.BTS/text.txt",
  "utf-8",
  (err, res) => {
    err ? console.log(err) : console.log(res);
  }
);
console.log(data.toString());

console.log("End");
