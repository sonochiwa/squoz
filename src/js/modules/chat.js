document.querySelector(".chat").onclick = function () {
  document.querySelector(".chat-dialog").classList.remove("closed");
  document.querySelector(".chat-dialog").classList.add("opened");
  document.querySelector(".chat").classList.remove("opened");
  document.querySelector(".chat").classList.add("closed");
};

document.querySelector(".chat-dialog__close").onclick = function () {
  document.querySelector(".chat-dialog").classList.remove("opened");
  document.querySelector(".chat-dialog").classList.add("closed");
  document.querySelector(".chat").classList.remove("closed");
  document.querySelector(".chat").classList.add("opened");
};

// document.querySelector(".сclose").onclick = function () {
//     document.querySelector(".chat").classList.add("opened");
//   };
