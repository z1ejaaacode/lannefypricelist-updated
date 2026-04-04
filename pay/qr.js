// =========================
// QRIS JS (FIX TOTAL + WA CONFIRM + BOX)
// =========================

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // AMBIL DATA
  // =========================
  const orderData = JSON.parse(localStorage.getItem("orderData")) || {};

  let orderId = localStorage.getItem("orderId");
  if (!orderId) {
    orderId = "id" + Math.floor(10000 + Math.random() * 90000);
    localStorage.setItem("orderId", orderId);
  }

  // =========================
  // SET DATA KE HTML (AMAN)
  // =========================
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  };

  setText("orderId", orderId);
  setText("orderUser", orderData.username || "-");
  setText("orderService", orderData.service || "-");
  setText("orderQty", orderData.qty || "-");
  setText("orderTotal", orderData.total || "-");

  // =========================
  // TIMER
  // =========================
  const totalTime = 5 * 60 * 1000;
  const createdAt = orderData.createdAt || Date.now();
  const expiredTime = createdAt + totalTime;

  const timerEl = document.getElementById("timer");
  const progressEl = document.getElementById("progressFill");

  function updateTimer() {
    if (!timerEl) return false;

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

  // =========================
  // CONFIRM BOX + BUTTON (40 DETIK)
  // =========================
  const confirmBox = document.getElementById("confirmBox");
  const confirmBtn = document.getElementById("confirmBtn");

  if (confirmBox && confirmBtn) {

    // delay 40 detik
    setTimeout(() => {

      // tampilkan box
      confirmBox.style.display = "block";

      // fade in
      setTimeout(() => {
        confirmBox.style.opacity = "1";
      }, 50);

      // auto scroll ke box
      setTimeout(() => {
        confirmBox.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 200);

      // vibrate (opsional)
      if (navigator.vibrate) {
        navigator.vibrate(100);
      }

    }, 40000);

    // =========================
    // ACTION KLIK (WHATSAPP)
    // =========================
    confirmBtn.addEventListener("click", () => {

      const message =
`Hallo admin Lannefy! saya sudah menyelesaikan pembayaran.

— Detail pesanan
id pesanan : ${orderId}
Username : ${orderData.username || "-"}
jumlah : ${orderData.qty || "-"}
layanan : ${orderData.service || "-"}
total harga : Rp ${orderData.total || "-"}

Terimakasih.`;

      const encodedMessage = encodeURIComponent(message);

      const adminNumber = "6283894934396";

      const waLink = `https://wa.me/${adminNumber}?text=${encodedMessage}`;

      window.open(waLink, "_blank");

    });

  }

});