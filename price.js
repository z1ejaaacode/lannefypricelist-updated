/* =========================
   DATA LAYANAN
========================= */
const servicesData = {
  "ig-followers": 
  { name: "Followers IG Super Murah [ High Drop + Fast ]", icon: "pict/instagram.png", prices: [
    { qty: "2000", price: "15.000" },
    { qty: "3000", price: "19.000" },
    { qty: "4000", price: "25.000"},
    { qty: "5000", price: "31.000"},
    { qty: "7000", price: "42.000"},
    { qty: "10.000", price: "57.000"}
    ] 
  },
  
  "ig2" : 
  { name: "Followers IG High Quality [ Awet / 70-80% permanen ]", icon: "pict/instagram.png", prices : [ 
    { qty: "650", price: "15.000" },
    { qty: "1000", price: "18.000"},
    { qty: "2000", price: "35.000"},
    { qty: "3000", price: "51.000"},
    { qty: "4000", price: "65.000"},
    { qty: "5000", price: "82.000"},
    { qty: "7000", price: "120.000"},
    { qty: "10.000", price: "165.000"}
    ]
  },
  
  "ig3" :
  { name: "Followers IG INDO [ awet / 80-90% Permanen + Fast ]", icon: "pict/instagram.png", prices : [
    { qty: "200", price: "15.000"},
    { qty: "500", price: "30.000"},
    { qty: "700", price: "42.000"},
    { qty: "1000", price: "57.000"},
    ]
  },
  
  "lk1" : 
  { name: "Likes IG Super Murah [ Fast & Awet 70-80% ]", icon: "pict/instagram.png", prices: [
    { qty: "4000", price: "13.500"},
    { qty: "6000", price: "21.000"},
      { qty: "8000", price: "25.000"},
      { qty: "10.000", price: "29.000"},
      { qty: "15.000", price: "45.000"},
      { qty: "20.000", price: "56.000"},
      { qty: "30.000", price: "85.000"},
      { qty: "100.000", price: "280.000"}
    ]
  },
  
  "lk2" : 
  { name: "Likes IG [ Akun Full Cewe / PREMIUM  + REAL AKTIF ]", icon: "pict/instagram.png", prices : [
    { qty: "300", price: "13.000"},
    { qty: "500", price: "20.000"},
    { qty: "700", price: "27.000"},
    { qty: "1000", price: "38.000"},
    { qty: "2000", price: "75.000"},
    { qty: "3000", price: "110.000"}
    ]
  },
  
  "lk3" : 
  { name: "Likes IG [ Akun Full Cowo / PREMIUM  + REAL AKTIF ]", icon: "pict/instagram.png", prices : [
    { qty: "300", price: "13.000"},
    { qty: "500", price: "20.000"},
    { qty: "700", price: "27.000"},
    { qty: "1000", price: "38.000"},
    { qty: "2000", price: "75.000"},
    { qty: "3000", price: "110.000"}
    ]
  },
  
  "vw1" : 
  { name: "Views Reels IG Super Murah [ High Drop + Fast ]", icon: "pict/instagram.png", prices : [
    { qty: "200.000", price: "13.000"},
    { qty: "300.000", price: "18.000"},
    { qty: "500.000", price: "26.000"},
    { qty: "700.000", price: "35.000"},
    { qty: "1 Juta Views", price: "55.000"},
    { qty: "5 Juta Views", price: "240.000"}
    ]
  },
  
  "vw2" : 
  { name: "Views Reels IG INDONESIA [ Less Drop + Instan ]", icon: "pict/instagram.png", prices : [
    { qty: "25.000", price: "13.000"},
    { qty: "50.000", price: "23.000"},
    { qty: "70.000", price: "30.000"},
    { qty: "100.000", price: "42.000"},
    { qty: "300.000", price: "120.000"},
    { qty: "500.000", price: "200.000"}
    ]
  },
  
    "ttl1" : 
  { name: "Likes VT Super Murah [ Fast + 90-97% PERMANEN ]", icon: "pict/tiktok.png", prices : [
    { qty: "20.000", price: "15.000"},
    { qty: "40.000", price: "25.000"},
    { qty: "60.000", price: "33.000"},
    { qty: "80.000", price: "45.000"},
    { qty: "100.000", price: "54.000"},
    { qty: "500.000", price: "260.000"}
    ]
  },
  
      "ttf1" : 
  { name: "Followers TikTok INDO SUPER HIGH QUALITY [ No Drop! ]", icon: "pict/tiktok.png", prices : [
    { qty: "100", price: "14.000"},
    { qty: "200", price: "22.000"},
    { qty: "300", price: "33.000"},
    { qty: "400", price: "44.000"},
    { qty: "500", price: "56.000"},
    { qty: "1000", price: "110.000"}
    ]
  },
  
        "ttf2" : 
  { name: "Followers TikTok High Quality [ Less Drop ]", icon: "pict/tiktok.png", prices : [
    { qty: "350", price: "14.000"},
    { qty: "500", price: "18.000"},
    { qty: "700", price: "23.500"},
    { qty: "1000", price: "34.000"},
    { qty: "2000", price: "62.000"},
    { qty: "3000", price: "93.000"}
    ]
  },
  
          "ttvw1" : 
  { name: "VT Views INDONESIA [ Less drop + Fast ]", icon: "pict/tiktok.png", prices : [
    { qty: "5000", price: "13.000"},
    { qty: "10.000", price: "20.000"},
    { qty: "20.000", price: "40.000"},
    { qty: "30.000", price: "57.000"},
    { qty: "40.000", price: "76.000"},
    { qty: "50.000", price: "94.000"}
    ]
  },
  
            "ttvw2" : 
  { name: "VT Views Super Murah [ High Drop+ ]", icon: "pict/tiktok.png", prices : [
    { qty: "30.000", price: "13.500"},
    { qty: "50.000", price: "22.000"},
    { qty: "70.000", price: "28.000"},
    { qty: "30.000", price: "57.000"},
    { qty: "100.000", price: "40.000"},
    { qty: "500.000", price: "194.000"}
    ]
  },
};

function showLoading() {
  const container = document.getElementById("priceContainer");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < 3; i++) { const div = document.createElement("div"); div.className = "skeleton"; div.innerHTML = `<div class="skeleton-bar"></div>`; container.appendChild(div); }
}

function renderPrices(target) {
  const container = document.getElementById("priceContainer");
  const selectedText = document.getElementById("selectedService");
  if (!container) return;

  container.innerHTML = "";
  const service = servicesData[target];
  if (!service) return;

  service.prices.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "price-item";
    div.innerHTML = `<img src="pict/cek.png" class="check-icon"><span class="qty">${item.qty}</span><span class="price">Rp ${item.price}</span>`;
    setTimeout(() => { div.classList.add("show"); }, index * 80);

    div.onclick = e => {
      const circle = document.createElement("span");
      const diameter = Math.max(div.clientWidth, div.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - div.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${e.clientY - div.getBoundingClientRect().top - radius}px`;
      circle.classList.add("ripple");
      const old = div.querySelector(".ripple"); if (old) old.remove(); div.appendChild(circle);

      document.querySelectorAll(".price-item").forEach(i => i.classList.remove("active"));
      div.classList.add("active");

      if (selectedText) { selectedText.innerHTML = `<img src="${service.icon}" style="width:16px;height:16px;"><span>${service.name} • ${item.qty}</span>`; }
    };

    container.appendChild(div);
  });
}

/* =========================
   DROPDOWN SYSTEM
========================= */
const serviceHeader = document.getElementById("serviceHeader");
const serviceList = document.getElementById("serviceList");
const serviceItems = document.querySelectorAll(".service-item");
const selectedService = document.getElementById("selectedService");

serviceItems.forEach(item => {
  const target = item.getAttribute("data-target");
  const service = servicesData[target];
  if (service) item.innerHTML = `<img src="${service.icon}"><span>${service.name}</span>`;
});

if (serviceHeader) {
  serviceHeader.onclick = () => {
    serviceList.classList.toggle("show");
    serviceHeader.classList.toggle("active");
    if (serviceList.classList.contains("show")) {
      const container = document.getElementById("priceContainer");
      if (container) container.innerHTML = "";
    }
  };
}

serviceItems.forEach(item => {
  item.onclick = () => {
    const target = item.getAttribute("data-target");
    showLoading();
    setTimeout(() => { renderPrices(target); }, 300);
    serviceList.classList.remove("show");
    serviceHeader.classList.remove("active");
    if (selectedService) {
      const service = servicesData[target];
      selectedService.innerHTML = `<img src="${service.icon}" style="width:16px;height:16px;"><span>${service.name}</span>`;
    }
  };
});