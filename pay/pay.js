// =========================
// PAYDANA.JS (FULL FIX)
// =========================

// Ambil data order
const orderData = JSON.parse(localStorage.getItem("orderData")) || {};

// Generate ID baru jika belum ada
let orderId = localStorage.getItem("orderId");
if (!orderId) {
  orderId = "id" + Math.floor(10000 + Math.random() * 90000);
  localStorage.setItem("orderId", orderId);
}

// =========================
// SET DATA KE STRUK
// =========================
document.getElementById("orderId").innerText = orderId;
document.getElementById("orderUser").innerText = orderData.username || "-";
document.getElementById("orderService").innerText = orderData.service || "-";
document.getElementById("orderQty").innerText = orderData.qty || "-";
document.getElementById("orderTotal").innerText = orderData.total || "-";

// =========================
// FIX NOMINAL PEMBAYARAN
// =========================
const paymentAmountEl = document.getElementById("paymentAmount");

if (paymentAmountEl) {
  let total = orderData.total || "0";

  // bersihin kalau ada "Rp." atau spasi
  total = total.toString().replace(/[^0-9]/g, "");

  if (total && total !== "0") {
    paymentAmountEl.innerText = "Rp. " + Number(total).toLocaleString("id-ID");
  } else {
    paymentAmountEl.innerText = "Rp. 0";
  }
}

// =========================
// TIMER BASED ON CREATED TIME
// =========================
const totalTime = 5 * 60 * 1000; // 5 menit
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

    // AUTO CANCEL
    orderData.status = "expired";
    localStorage.setItem("orderData", JSON.stringify(orderData));
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

// Start timer
updateTimer();
const countdown = setInterval(() => {
  if (!updateTimer()) clearInterval(countdown);
}, 1000);

// =========================
// KONFIRMASI WA
// =========================
setTimeout(() => {
  const confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");
  confirmBox.style.cssText = `
    background:#fff;
    border-radius:12px;
    padding:16px;
    box-shadow:0 3px 12px rgba(0,0,0,0.1);
    margin-top:20px;
    text-align:center;
  `;

  const text = document.createElement("p");
  text.innerText = "Sudah menyelesaikan pembayaran? Klik tombol dibawah ini untuk konfirmasi dan kirim bukti ke admin.";

  const button = document.createElement("button");
  button.innerText = "Konfirmasi ke admin";
  button.style.cssText = `
    margin-top:12px;
    padding:10px 16px;
    border-radius:8px;
    background-color:lightgrey;
    color:black;
    font-weight:bold;
    border:none;
    cursor:pointer;
  `;

  const waNumber = "6283894934396";
  button.addEventListener("click", () => {
    // update status
    orderData.status = "paid";
    localStorage.setItem("orderData", JSON.stringify(orderData));

    const msg = `Hallo admin Lannefy! saya sudah menyelesaikan pembayaran.\n\n— Detail pesanan\nid pesanan : ${orderId}\nUsername : ${orderData.username || "-"}\njumlah : ${orderData.qty || "-"}\nlayanan : ${orderData.service || "-"}\ntotal harga : ${orderData.total || "-"}\n\nTerimakasih.`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  });

  confirmBox.appendChild(text);
  confirmBox.appendChild(button);
  document.querySelector(".container")?.appendChild(confirmBox);

  button.scrollIntoView({ behavior: "smooth", block: "center" });
}, 40000);