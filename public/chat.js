// Make connection

var socket = io.connect("http://localhost:4000");

// DOM WORKS

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");

//emit  events

btn.addEventListener("click", function () {
  socket.emit("chat-msg", {
    message: message.value,
    handle: handle.value,
  });
});

//Listen for events

socket.on("chat-msg", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
});
