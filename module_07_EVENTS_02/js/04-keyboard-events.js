const outputRef = document.querySelector(".js-output");
const clearBtn = document.querySelector(".js-clear");

window.addEventListener("keypress", handleType);
clearBtn.addEventListener("click", handleClear);

function handleClear() {
  outputRef.textContent = "";
}

function handleType(event) {
  console.log("event.key :", event.key);
  console.log("event.code :", event.code);

  if (event.code === "Escape") {
    console.log("Натиснули ESC");
  }

  outputRef.textContent += event.key;
}
