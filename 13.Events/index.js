import EventEmitter from "events";

const normalEmitter = new EventEmitter();
const onceEmitter = new EventEmitter();

onceEmitter.once("once", (name, id) => {
  console.log(`once tell to you name: ${name} id: ${id}`);
});

normalEmitter.on("responce", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});

normalEmitter.emit("responce", "Huxn", 18);
normalEmitter.emit("responc", "john", 28);
normalEmitter.emit("responce", "Alissa", 28);
normalEmitter.emit("responce", "Alex", 10);

onceEmitter.emit("on", "Huxn", 18);
onceEmitter.emit("once", "john", 28);
onceEmitter.emit("on", "Alissa", 28);
onceEmitter.emit("once", "Alex", 10);
