/* =========================
   SCRIPT UTAMA LANNEFY
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     FORCE LIGHT MODE
  ========================== */
  // Paksa browser & sistem bawaan tetap light mode
  document.documentElement.style.colorScheme = "light";
  document.body.style.backgroundColor = "#fff"; // pastikan background putih
  document.body.style.color = "#000"; // pastikan teks hitam

  /* =========================
     SIDEBAR SYSTEM
  ========================== */
  const btn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  btn?.addEventListener("click", () => {
    const items = document.querySelectorAll(".sidebar-header, .menu a");
    items.forEach(el => { el.style.animation = "none"; el.offsetHeight; el.style.animation = null; });
    sidebar.classList.add("show");
    overlay.classList.add("show");
    btn.classList.add("active");
    document.body.classList.add("lock", "blur");
  });

  overlay?.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    btn.classList.remove("active");
    document.body.classList.remove("lock", "blur");
  });

  sidebar?.addEventListener("click", e => e.stopPropagation());

  document.querySelectorAll(".menu a").forEach(link => link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    btn.classList.remove("active");
    document.body.classList.remove("lock", "blur");
  }));

  /* =========================
     ORDER SYSTEM + LOCAL STORAGE + LOADING
  ========================== */
  const orderBtn = document.getElementById("orderBtn");
  const usernameInput = document.getElementById("targetInput");
  const selectedText = document.getElementById("selectedService");
  const loadingOverlay = document.getElementById("loadingOverlay");

  // Pastikan overlay default hidden di CSS: display:none
  if (loadingOverlay) loadingOverlay.style.display = "none";

  let selectedPayment = "DANA";
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener("change", () => { selectedPayment = radio.value; });
  });

  orderBtn?.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const activePrice = document.querySelector(".price-item.active");
    const serviceText = selectedText.innerText;

    if (!username || !activePrice || serviceText === "Pilih Layanan") {
      alert("Lengkapi data dulu!");
      return;
    }

    // Simpan data ke localStorage
    const orderData = {
      username: username,
      service: serviceText,
      qty: activePrice.querySelector(".qty")?.innerText || "",
      total: activePrice.querySelector(".price")?.innerText || "",
      payment: selectedPayment
    };
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Tampilkan overlay loading saat klik tombol
    if (loadingOverlay) loadingOverlay.style.display = "flex";

    // Redirect setelah 5 detik
    setTimeout(() => {
      if (loadingOverlay) loadingOverlay.style.display = "none"; // sembunyikan overlay sebelum redirect
      const paymentLower = selectedPayment.toLowerCase();
      if (paymentLower === "dana") window.location.href = "pay/paydana.html";
      else if (paymentLower === "gopay") window.location.href = "pay/paygopay.html";
      else if (paymentLower === "qris") window.location.href = "pay/payqr.html";
    }, 5000);
  });

});