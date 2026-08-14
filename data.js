// DATA POTENSI DUSUN (TAMPIL DI SIDEBAR SAAT DUSUN DIKLIK / DIPILIH)
const dataDusunDetail = {
    "Sidahurip": {
        potensi: `
            • <b>Pemerintahan & Sosmas:</b> 9 RT / 1 RW. Posyandu rutin awal bulan, Kelompok Simpan Pinjam "Sartika".<br>
            • <b>Keagamaan:</b> 3 DKM & 1 Langgar. Pengajian rutin malam hari, ibu-ibu Jumat, & Diniyah SD Al-Istikomah.<br>
            • <b>UMKM:</b> Production Rangginang (RT 05), Keripik (singkong/ubi/pisang), pengrajin golok & ayakan.<br>
            • <b>Pertanian & Ternak:</b> Poktan RT 03 (sayur & kelapa), ternak kambing/domba DKM Al-Falah.<br>
            • <b>Inovasi & Karakter:</b> Olahan sampah organik POC/bahan bakar. Masyarakat gotong royong (80%) & Karang Taruna Karya aktif.
        `
    },
    "Sidikarya": {
        potensi: `
            • <b>Mata Pencaharian:</b> Mayoritas petani (padi & jagung). Terdiri dari 3 RT.<br>
            • <b>UMKM & Industri:</b> Kacang Sangrai Titani, Keripik Pisang Bu Onih, industri pengolahan kayu & triplek.<br>
            • <b>Keagamaan:</b> Pengajian ibu-ibu Jumat sore & bapak-bapak ba'da Jumatan.<br>
            • <b>Karakter & Sosial:</b> Gotong royong tinggi, persiapan kegiatan event Agustusan perdusun.
        `
    },
    "Karangkamulyan": {
        potensi: `
            • <b>UMKM Utama:</b> Industri gula kelapa / gula merah tradisional (turun-temurun, pembakaran sabut kelapa).<br>
            • <b>Kapasitas & Usaha:</b> Produksi ±4 kg/hari (Rp 20.000/kg), jualan di rumah & bakul, Wisata Gua Nyalindung.<br>
            • <b>Kendala:</b> Kemasan sederhana, belum ber-merek, produsen mayoritas lansia.<br>
            • <b>Keagamaan:</b> 2 TPQ (Masjid Al-Hidayah & dekat MI).
        `
    },
    "Cikubang": {
        potensi: `
            • <b>Mata Pencaharian:</b> Mayoritas buruh tani & petani kelapa.<br>
            • <b>UMKM:</b> Pengrajin kue snack, keripik, & Warung Bi Rose (kendala: legalitas NIB/Halal & pemasaran).<br>
            • <b>Keagamaan & Sosial:</b> Pengajian tiap malam, TPQ Zuhur (76 santri), Posyandu 1x/bulan.
        `
    },
    "Ciawi": {
        potensi: `
            • <b>Pertanian & Hasil Alam:</b> Kelapa (komoditas utama), persawahan, & manggis.<br>
            • <b>Keagamaan:</b> 3 Masjid, pengajian rutin Minggu ke 2-4 & pengajian ibu-ibu Jumat.<br>
            • <b>Lingkungan & Kegiatan:</b> Posyandu (RT 7, 8, 9), fasilitas tempat sampah bedokan, senam lansia & Jumat Bersih.
        `
    },
    "Karang Petir": {
        potensi: `
            • <b>Pertanian & Komoditas:</b> Petani padi, penjual sayur, & kebun manggis.<br>
            • <b>Keagamaan & Sosial:</b> 2 Masjid, TPQ, Posyandu Minggu, Pos Ronda aktif.<br>
            • <b>Kondisi Wilayah:</b> Akses jalan rusak, penerangan kurang, Karang Taruna baru regenerasi ketua.
        `
    }
};

// DATA MARKER UMKM / WISATA LAPANGAN
const umkm = [
    {
        nama: "Rumah Nenek",
        dusun: "Karangkamulyan",
        potensi: "Lokasi pemukiman / landmark warga lokal.",
        lat: -7.652951,
        lng: 108.517126,
        foto: "img/rumah.jpg"
    },
    {
        nama: "Gua Nyalindung",
        dusun: "Karangkamulyan",
        potensi: "Potensi Wisata Alam Gua Nyalindung Desa Cintakarya.",
        lat: -7.653972,
        lng: 108.516753,
        foto: "img/gua.jpg"
    },
    {
        nama: "Gula Bu Entin",
        dusun: "Karangkamulyan",
        potensi: "Industri Olahan Gula Kelapa Tradisional.",
        lat: -7.656613,
        lng: 108.513636,
        foto: "img/gula.jpg"
    },
    {
        nama: "Agen BRILink & Warung Teh Ilah",
        dusun: "Karangkamulyan",
        potensi: "Layanan Keuangan Digital BRILink dan Warung Kelontong.",
        lat: -7.656587,
        lng: 108.513702,
        foto: "img/warung.jpg"
    },
    {
        nama: "Keripik Pisang Ibu Onih",
        dusun: "Cikubang",
        potensi: "UMKM Olahan Makanan Keripik Pisang Renyah.",
        lat: -7.647197,
        lng: 108.488070,
        foto: "img/keripik.jpg"
    },
    {
        nama: "Kacang Sangrai Titani",
        dusun: "Sidikarya",
        potensi: "UMKM Olahan Kacang Sangrai khas Desa Cintakarya.",
        lat: -7.641402,
        lng: 108.480131,
        foto: "img/kacang.jpg"
    },
    {
        nama: "Warung Bi Rose",
        dusun: "Cikubang",
        potensi: "Warung Kelontong & Usaha Pangan Masyarakat.",
        lat: -7.645059,
        lng: 108.488990,
        foto: "img/rose.jpg"
    }
];