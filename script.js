const secretCode = "genesis";
let inputBuffer = "";

const message = document.getElementById("money-message");

window.addEventListener("keydown", (e) => {
  // Add typed key to buffer (lowercase)
  inputBuffer += e.key.toLowerCase();

  // Keep buffer length same as secretCode length
  if (inputBuffer.length > secretCode.length) {
    inputBuffer = inputBuffer.slice(-secretCode.length);
  }

  // Check if buffer matches secret code
  if (inputBuffer === secretCode) {
    showMoneyMessage();
    inputBuffer = ""; // reset buffer after success
  }
});

function showMoneyMessage() {
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("show");
  }, 10);

  // Hide after 3 seconds
  setTimeout(() => {
    message.classList.remove("show");
    setTimeout(() => {
      message.classList.add("hidden");
    }, 400);
  }, 3000);
}
