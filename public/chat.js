// Make connection

var socket = io.connect("http://localhost:4000");

// DOM WORKS

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");
//emit  events

btn.addEventListener("click", function () {
  socket.emit("chat-msg", {
    message: message.value,
    handle: handle.value,
  });
});

message.addEventListener("keypress", function () {
  socket.emit("typing", handle.value);
});

//Listen for events

socket.on("chat-msg", function (data) {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
});

socket.on("typing", function (data) {
  feedback.innerHTML = "<p><em> " + data + " is typing ....</em></p>";
});
