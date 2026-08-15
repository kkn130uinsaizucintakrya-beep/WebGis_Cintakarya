// ==========================================
// 1. INISIALISASI PETA UTAMA
// ==========================================
var map = L.map('map', {
    zoomControl: true,
    minZoom: 12,
    maxZoom: 18
}).setView([-7.6518, 108.4998], 14);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }
).addTo(map);

// ==========================================
// 2. MASKING WARNA PUTIH TRANSPARAN DI LUAR DESA
// ==========================================
if (typeof batasDesaCintakarya !== 'undefined') {
    var outerWorld = [
        [90, -180],
        [90, 180],
        [-90, 180],
        [-90, -180]
    ];

    // PENTING: interactive: false membuat klik tidak terhalang oleh layer masking ini!
    L.polygon([outerWorld, batasDesaCintakarya], {
        color: '#ffffff',
        weight: 3,
        fillColor: '#ffffff',
        fillOpacity: 0.5,
        interactive: false 
    }).addTo(map);
}

// ==========================================
// 3. MINI MAP
// ==========================================
if (document.getElementById('mini-map')) {
    var miniMap = L.map('mini-map', {
        zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false
    }).setView([-7.6518, 108.4998], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(miniMap);

    var miniMapRect = L.rectangle(map.getBounds(), { color: "#ef4444", weight: 2, fillOpacity: 0.2 }).addTo(miniMap);
    map.on('move', function () {
        miniMap.setView(map.getCenter(), Math.max(map.getZoom() - 3, 10));
        miniMapRect.setBounds(map.getBounds());
    });
}

// ==========================================
// 4. FUNGSI UPDATE SIDEBAR KANAN + AUTO SCROLL
// ==========================================
function updateSidebarKanan(judul, kategori, foto, dusunNama, potensiInfo, koordinatInfo) {
    var container = document.getElementById('konten-detail');
    if (!container) return;

    var htmlFoto = foto ? `<img src="${foto}" style="width:100%; height:150px; object-fit:cover; border-radius:8px; margin:10px 0 12px 0; border:1px solid #cbd5e1;" onerror="this.style.display='none'">` : '';

    container.innerHTML = `
        <div style="border-left: 4px solid #0284c7; padding-left: 10px; margin-bottom: 12px; text-align: left;">
            <span style="font-size:10px; background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:12px; font-weight:bold; text-transform:uppercase;">${kategori}</span>
            <h3 style="color:#1f4e79; margin-top:4px; font-size:16px; font-weight:700;">${judul}</h3>
        </div>
        ${htmlFoto}
        <div style="font-size:12.5px; line-height:1.6; color:#334155; text-align: left;">
            <p style="margin-bottom:6px;"><b>Wilayah:</b> Dusun ${dusunNama}</p>
            <div style="margin-top:6px;"><b>Rangkuman & Potensi:</b><br>${potensiInfo}</div>
            ${koordinatInfo ? `<p style="margin-top:10px;"><small style="color:#64748b;"><b>Koordinat:</b> ${koordinatInfo}</small></p>` : ''}
        </div>
    `;

    // AUTO SCROLL KHUSUS TAMPILAN HP: Jika diklik, layar otomatis meluncur ke panel keterangan
    var panelDetail = document.getElementById('panel-detail');
    if (panelDetail && window.innerWidth <= 768) {
        panelDetail.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// 5. BADGE NAMA DUSUN (BISA DIKLIK)
// ==========================================
var titikDusun = [
    { nama: "Sidikarya", lat: -7.6375, lng: 108.4760 },
    { nama: "Cikubang", lat: -7.6410, lng: 108.4920 },
    { nama: "Sidahurip", lat: -7.6580, lng: 108.4860 },
    { nama: "Ciawi", lat: -7.6545, lng: 108.5025 },
    { nama: "Karangkamulyan", lat: -7.6485, lng: 108.5140 },
    { nama: "Karang Petir", lat: -7.6630, lng: 108.5100 }
];

titikDusun.forEach(function(item) {
    var labelIcon = L.divIcon({
        className: 'custom-dusun-card',
        html: `<div style="cursor:pointer; background:rgba(255,255,255,0.95); border:1.5px solid #0284c7; font-weight:bold; padding:4px 8px; border-radius:6px; font-size:11px; color:#0f172a; text-align:center; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Dusun ${item.nama}</div>`,
        iconSize: [110, 28],
        iconAnchor: [55, 14]
    });

    // zIndexOffset: 1000 agar badge dusun posisinya paling depan
    var markerDusun = L.marker([item.lat, item.lng], { icon: labelIcon, zIndexOffset: 1000 }).addTo(map);

    markerDusun.on('click', function() {
        var keyNama = item.nama;
        // Mengambil data dari dusun.js
        var detail = (typeof dataDusunDetail !== 'undefined' && dataDusunDetail[keyNama]) ? dataDusunDetail[keyNama].potensi : "Data profil dusun belum tersedia.";
        
        updateSidebarKanan(
            `Profil Dusun ${item.nama}`,
            "Dusun & Wilayah",
            "",
            item.nama,
            detail,
            `${item.lat}, ${item.lng}`
        );
    });
});

// ==========================================
// 6. MARKER UMKM / WISATA
// ==========================================
var redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

if (typeof umkm !== 'undefined' && Array.isArray(umkm)) {
    umkm.forEach(function(itemUMKM) {
        var marker = L.marker([itemUMKM.lat, itemUMKM.lng], { icon: redIcon, zIndexOffset: 1500 }).addTo(map);

        marker.bindPopup(`
            <div style="text-align:center;">
                <b style="color:#1f4e79;">${itemUMKM.nama}</b><br>
                <small>Dusun ${itemUMKM.dusun}</small>
            </div>
        `);

        marker.on('click', function() {
            updateSidebarKanan(
                itemUMKM.nama,
                "UMKM / Wisata",
                itemUMKM.foto,
                itemUMKM.dusun,
                itemUMKM.potensi || "Informasi potensi.",
                `${itemUMKM.lat}, ${itemUMKM.lng}`
            );
        });
    });
}

// ==========================================
// 7. RE-RENDER PETA
// ==========================================
L.control.scale({
    metric: true,
    imperial: false
}).addTo(map);


// Refresh ukuran peta setelah halaman selesai dimuat
setTimeout(function () {
    map.invalidateSize(true);

    if (typeof miniMap !== 'undefined') {
        miniMap.invalidateSize(true);
    }
}, 500);


// Refresh ketika ukuran layar berubah
window.addEventListener('resize', function () {
    setTimeout(function () {
        map.invalidateSize(true);

        if (typeof miniMap !== 'undefined') {
            miniMap.invalidateSize(true);
        }
    }, 200);
});


// Refresh ketika HP berubah orientasi
window.addEventListener('orientationchange', function () {
    setTimeout(function () {
        map.invalidateSize(true);

        if (typeof miniMap !== 'undefined') {
            miniMap.invalidateSize(true);
        }
    }, 500);
});