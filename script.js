// ==========================================
// 1. INISIALISASI PETA UTAMA
// ==========================================

var map = L.map('map', {
    zoomControl: true,
    minZoom: 12,
    maxZoom: 18
}).setView([-7.6518, 108.4998], 14);


// ==========================================
// 2. PETA SATELIT
// ==========================================

var satelliteLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles © Esri',
        maxZoom: 18
    }
).addTo(map);


// ==========================================
// 2A. FOKUS KE BATAS DESA
// ==========================================

// Peta pertama kali muncul menggunakan koordinat Desa Cintakarya.
// Setelah ukuran peta terbaca, baru disesuaikan dengan batas desa.

setTimeout(function () {

    map.invalidateSize(true);

    if (typeof batasDesaCintakarya !== 'undefined') {

        var batasDesa = L.latLngBounds(batasDesaCintakarya);

        map.fitBounds(batasDesa, {
            padding: [45, 45],
            maxZoom: 15
        });

    }

}, 700);


// ==========================================
// 2B. MASKING WARNA PUTIH TRANSPARAN
// DI LUAR DESA
// ==========================================

if (typeof batasDesaCintakarya !== 'undefined') {

    var outerWorld = [
        [90, -180],
        [90, 180],
        [-90, 180],
        [-90, -180]
    ];

    L.polygon(
        [outerWorld, batasDesaCintakarya],
        {
            color: '#ffffff',
            weight: 3,
            fillColor: '#ffffff',
            fillOpacity: 0.5,
            interactive: false
        }
    ).addTo(map);
}


// ==========================================
// 3. MINI MAP
// ==========================================

if (document.getElementById('mini-map')) {

    var miniMap = L.map('mini-map', {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false
    }).setView([-7.6518, 108.4998], 12);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '© OpenStreetMap'
        }
    ).addTo(miniMap);

    var miniMapRect = L.rectangle(
        map.getBounds(),
        {
            color: "#ef4444",
            weight: 2,
            fillOpacity: 0.2
        }
    ).addTo(miniMap);

    map.on('move', function () {

        miniMap.setView(
            map.getCenter(),
            Math.max(map.getZoom() - 3, 10)
        );

        miniMapRect.setBounds(map.getBounds());

    });
}