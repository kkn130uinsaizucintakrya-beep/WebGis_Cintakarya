const dusun = [
    {
        nama: "Sidikarya",
        potensi: "UMKM Olahan Pangan (Kacang Sangrai, Keripik Pisang) dan kegiatan pertanian.",
        koordinat: [
            [-7.6320, 108.4680],
            [-7.6330, 108.4840],
            [-7.6414, 108.4801], // Dekat Kacang Sangrai Titani
            [-7.6471, 108.4880], // Dekat Keripik Pisang Ibu Onih
            [-7.6535, 108.4821], // Pertigaan Sidahurip - Sidikarya (Meyda)
            [-7.6450, 108.4710]
        ]
    },
    {
        nama: "Cikubang",
        potensi: "Pertanian Kelapa, UMKM Warung Bi Rose, & Olahan Pangan.",
        koordinat: [
            [-7.6330, 108.4840],
            [-7.6452, 108.4994], // Batas Cikubang - Cintaratu (Meyda)
            [-7.6501, 108.4996], // Batas Ciawi - Cikubang (Meyda)
            [-7.6513, 108.4852], // Batas Sidahurip - Cikubang (Meyda)
            [-7.6450, 108.4889]  // Dekat Warung Bi Rose
        ]
    },
    {
        nama: "Sidahurip",
        potensi: "UMKM Rangginang, Keripik, Pengrajin Golok, & Peternakan.",
        koordinat: [
            [-7.6535, 108.4821], // Pertigaan Sidahurip - Sidikarya (Meyda)
            [-7.6513, 108.4852], // Batas Sidahurip - Cikubang (Meyda)
            [-7.6501, 108.4996], // Sambungan batas Ciawi
            [-7.6658, 108.5001], // Batas Ciawi - Karangbenda (Meyda)
            [-7.6650, 108.4780]
        ]
    },
    {
        nama: "Ciawi",
        potensi: "Pertanian Kelapa, Persawahan, & Komoditas Manggis.",
        koordinat: [
            [-7.6501, 108.4996], // Batas Ciawi - Cikubang (Meyda)
            [-7.6492, 108.5026], // Batas Ciawi - Cintaratu (Meyda)
            [-7.6529, 108.5070], // Batas Ciawi - Karangkamulyan (Meyda)
            [-7.6588, 108.5061], // Batas Ciawi - Karangpetir (Meyda)
            [-7.6658, 108.5001]  // Batas Ciawi - Karangbenda (Meyda)
        ]
    },
    {
        nama: "Karangkamulyan",
        potensi: "Wisata Gua Nyalindung, Industri Gula Kelapa, BRILink, & UMKM.",
        koordinat: [
            [-7.6492, 108.5026], // Batas Cintaratu (Meyda)
            [-7.6450, 108.5220],
            [-7.6616, 108.5172], // Batas Karangkamulyan - Karangpetir (Meyda)
            [-7.6529, 108.5070]  // Batas Karangkamulyan - Ciawi (Meyda)
        ]
    },
    {
        nama: "Karang Petir",
        potensi: "Pertanian Padi, Kebun Manggis, & Penjual Sayur.",
        koordinat: [
            [-7.6529, 108.5070], // Titik temu atas Ciawi/Karangkamulyan
            [-7.6616, 108.5172], // Batas Karangkamulyan - Karangpetir (Meyda)
            [-7.6680, 108.5180],
            [-7.6658, 108.5001], // Batas Ciawi - Karangbenda (Meyda)
            [-7.6588, 108.5061]  // Batas Ciawi - Karangpetir (Meyda)
        ]
    }
];

// GABUNGAN SELURUH KOORDINAT OUTER BOUNDARY DESA CINTAKARYA (DARI DATA MEYDA)
const batasDesaCintakarya = [
    [-7.6320, 108.4680], // Sidikarya Atas
    [-7.6330, 108.4840], // Sidikarya - Cikubang
    [-7.6452, 108.4994], // Cikubang - Cintaratu
    [-7.6492, 108.5026], // Ciawi - Cintaratu
    [-7.6450, 108.5220], // Karangkamulyan Ujung
    [-7.6616, 108.5172], // Karangkamulyan - Karangpetir
    [-7.6680, 108.5180], // Karangpetir Bawah
    [-7.6658, 108.5001], // Ciawi - Karangbenda
    [-7.6650, 108.4780], // Sidahurip Bawah
    [-7.6535, 108.4821], // Pertigaan Sidahurip - Sidikarya
    [-7.6450, 108.4710]  // Sidikarya Kiri
];