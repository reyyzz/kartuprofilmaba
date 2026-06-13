# Kartu Profil MABA 2026

Halo, ini adalah repository untuk tugas Kartu Profil MABA (Mahasiswa Baru) 2026.

Secara garis besar, tugas ini berisi ID card digital interaktif dengan gaya 3D glassmorphism. Kalau kartunya disorot mouse, bakal muncul efek kilauan hologram yang ngikutin kursor. Kalau diklik, kartunya bisa nge-flip buat nampilin data detail seperti nama lengkap, NRP, dan nama gugus.

## Fitur Utama
- Interactive 3D Hover: Kartu akan mengikuti arah pergerakan mouse dengan pencahayaan dinamis.
- Glassmorphism UI: Tampilan transparan bergaya kaca buram untuk kesan modern.
- Flip Card: Dua sisi kartu. Bagian depan untuk nama panggilan, bagian belakang untuk informasi spesifik (NRP & Gugus).

## Cara Menjalankan di Lokal

Buat yang mau coba jalanin sendiri, pastikan Node.js sudah terinstall.

1. Clone repository ini:
   ```bash
   git clone https://github.com/reyyzz/kartuprofilmaba.git
   cd kartuprofilmaba
   ```
2. Install semua dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka http://localhost:3000 di browser.

## Tech Stack
- Next.js (React)
- Vanilla CSS untuk styling dan animasi 3D (tanpa framework tambahan supaya lebih fleksibel).

---
Dibuat oleh Raihan A.F.
