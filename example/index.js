import { IMAPServer } from "../src";

const server = new IMAPServer({});

const mailBox = [
  {
    name: "Trash",
  },
  {
    name: "Inbox"
  }
]

server.onAuth = (auth, connection, callback) => {
  callback(null, "sammwy");
};

server.onList = (filter, connection, callback) => {
  callback(null, mailBox);
};

server.onCreate = (name, connection, callback) => {
  //mailBox.push({
  //  name
  //})

  callback();
}

server.onSubscribe = (name, connection, callback) => {
  callback();
}

server.listen(143, "127.0.0.1", 1024, () => {
  console.log("Server Listening");
});
