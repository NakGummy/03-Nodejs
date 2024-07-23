import { createReadStream } from "fs";

// const stream = createReadStream("C:/NakDev/03-Nodejs/14.Stream/data.txt", {
//   highWaterMark: 90000,
// });

const stream = createReadStream("C:/NakDev/03-Nodejs/14.Stream/data.txt", {
  encoding: "utf-8",
});

stream.on("data", (data) => {
  console.log(data);
});
