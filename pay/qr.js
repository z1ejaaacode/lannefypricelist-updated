// =========================
// QRIS JS (FIX TIMER)
// =========================

const orderData = JSON.parse(localStorage.getItem("orderData")) || {};

let orderId = localStorage.getItem("orderId");
if (!orderId) {
  orderId = "id" + Math.floor(10000 + Math.random() * 90000);
  localStorage.setItem("orderId", orderId);
}

// SET DATA
document.getElementById("orderId").innerText = orderId;
document.getElementById("orderUser").innerText = orderData.username || "-";
document.getElementById("orderService").innerText = orderData.service || "-";
document.getElementById("orderQty").innerText = orderData.qty || "-";
document.getElementById("orderTotal").innerText = orderData.total || "-";

// =========================
// TIMER FIX
// =========================
const totalTime = 5 * 60 * 1000;
const createdAt = orderData.createdAt || Date.now();
const expiredTime = createdAt + totalTime;

const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progressFill");

function updateTimer() {
  const now = Date.now();
  const timeLeft = expiredTime - now;

  if (timeLeft <= 0) {
    timerEl.innerText = "Waktu Habis, buat pesanan baru";
    timerEl.style.color = "#e60000";
    if (progressEl) progressEl.style.width = "0%";

    localStorage.removeItem("orderId");

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
    return false;
  }

  const totalSeconds = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timerEl.innerText =
    `${minutes < 10 ? "0" + minutes : minutes}:` +
    `${seconds < 10 ? "0" + seconds : seconds}`;

  if (progressEl) {
    const percent = (timeLeft / totalTime) * 100;
    progressEl.style.width = percent + "%";

    if (timeLeft > 3 * 60 * 1000) {
      progressEl.style.backgroundColor = "#00b33c";
      timerEl.style.color = "#00b33c";
    } else if (timeLeft > 60 * 1000) {
      progressEl.style.backgroundColor = "#ff8c00";
      timerEl.style.color = "#ff8c00";
    } else {
      progressEl.style.backgroundColor = "#e60000";
      timerEl.style.color = "#e60000";
    }
  }

  return true;
}

updateTimer();
const countdown = setInterval(() => {
  if (!updateTimer()) clearInterval(countdown);
}, 1000);