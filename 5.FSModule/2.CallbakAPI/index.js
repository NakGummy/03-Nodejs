import * as fs from "fs";

fs.mkdir("./api-2", (error) => {
  if (error) throw error;
  console.log("Directory Created");
});
