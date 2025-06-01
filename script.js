// Easter Egg: Type "expok" to redirect to breadfinancial.com
const secretCode = "expok";
let inputBuffer = "";

window.addEventListener("keydown", (e) => {
  inputBuffer += e.key.toLowerCase();

  // Keep the buffer trimmed to match secret length
  if (inputBuffer.length > secretCode.length) {
    inputBuffer = inputBuffer.slice(-secretCode.length);
  }

  if (inputBuffer === secretCode) {
    window.location.href = "https://www.breadfinancial.com/";
  }
});
