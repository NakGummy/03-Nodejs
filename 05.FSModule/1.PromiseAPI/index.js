import * as fs from "fs/promises";

try {
  //   const files = await fs.readdir(".");

  //*
  await fs.mkdir("./api-1", { recursive: true });
  console.log("FolderCreated");

  /*/

  await fs.rmdir("./api-1");

  //*/
  for (const file of files) {
    console.log(file);
  }
} catch (e) {
  console.log(e);
}

try {
  // await fs.writeFile("README.md", "Hello Nodejs");
  await fs.appendFile("README.md", "Nodejs is the best");

  await fs.copyFile("README.md", "readme.txt");
  const info = await fs.stat("info.txt");

  const data = await fs.readFile("README.md", "utf-8");
  console.log(data);
  console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (e) {
  console.log(e);
}
