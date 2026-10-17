# ⚡ Novi Herlambang // Cyber Deck Portfolio & Resume

> **Retro Cyberpunk Developer Portfolio & Interactive Cyber Deck**  
> Dibuat dengan stack JavaScript modern, populer, dan super stabil: **React 19 + TypeScript + Vite + Tailwind CSS**.  
> Data diadaptasi penuh dan diperkaya dari resume resmi: [https://novihe.github.io/CV](https://novihe.github.io/CV).

---

## 🚀 Fitur Unggulan

- **Retro Cyber Aesthetics**:
  - Palet warna Cyberpunk: Neon Cyan (`#00f0ff`), Toxic Green (`#00ff66`), Neon Pink (`#ff007f`), dan Dark Circuit Surface (`#07090e`).
  - Efek CRT Scanlines horizontal & flicker (dapat diaktifkan/dinonaktifkan via tombol `CRT` di navbar).
  - Cyber HUD telemetry: Live System Clock, koordinat GPS Pangandaran, status operator.
  - Glitch text effect & angled cyber cut borders (`clip-path`).
- **Interactive Cyber Terminal (CLI Shell)**:
  - Tekan tombol `TERM_CLI` di navbar atau hero untuk membuka terminal interaktif.
  - Dukungan perintah: `help`, `about`, `skills`, `projects`, `edu`, `exp`, `contact`, `cv`, `matrix`, `clear`, `sudo`.
- **Synthesized 8-Bit Cyber Audio (Web Audio API)**:
  - Sound effects retro saat klik tombol, hover, glitch, transmisi form, dan ketikan keyboard terminal.
  - Zero external MP3/audio files (murni sintesis gelombang audio browser).
  - Default dimatikan demi kenyamanan, tombol audio toggle `ON/OFF` tersedia di navbar.
- **Data Proyek Lengkap (10 Arsip Proyek Asli)**:
  1. *Laravel Pengaduan App (Ciganjeng Damai)*
  2. *Kotlin CEXCANGER App*
  3. *Laravel Sistem Informasi Data Asset (SIDA)*
  4. *PHP Lelang Ikan (Dataminer Algoritma Apriori)*
  5. *PHP Penggajian App*
  6. *IoT Smart Home Project (SMKN 1 Padaherang)*
  7. *Laravel Sistem Pendukung Keputusan (SPK)*
  8. *Develop Project T-Hypestor*
  9. *Kotlin Github User App*
  10. *Develop Project TBL-Cargo*
  - Dilengkapi tab filter kategori, tombol Inspect Specs Modal, link Live Demo, dan link GitHub Repository.
- **Skills Matrix & Original Logos**:
  - Logo asli dari CV lama: HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP, Laravel, Kotlin.
  - Bar meter tingkat keahlian dan daftar teknologi pelengkap (MySQL, REST API, Git, IoT/Arduino).
- **Education & Experience Timeline**:
  - Rekam jejak pendidikan SMKN 1 Padaherang RPL, PKL di PT. CitCall Teknologi Indonesia, Tim Pameran IoT, dan freelance developer.
- **Direct Contact & Transmission**:
  - Banner ketersediaan freelance.
  - Transmission form otomatis menghasilkan link `mailto:` serta confetti celebration.
  - Tombol 1-klik salin email ke clipboard.
  - Tombol download resmi PDF CV (`Resume-Novi-Herlambang.pdf`).

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Modern & Populer)
- **Language**: TypeScript
- **Bundler**: Vite 8 (Ultra-fast HMR & Static Export)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React + Custom Tech Icons
- **Visual & Audio FX**: Web Audio API + Canvas Confetti
- **Deployment Targets**: GitHub Pages, Vercel, Netlify (100% Gratis)

---

## 💻 Menjalankan di Komputer Lokal

1. **Clone atau buka folder project**:
   ```bash
   cd "d:/Laravel/portfolio resume"
   ```

2. **Jalankan local development server**:
   ```bash
   npm run dev
   ```
   Buka browser di URL yang tertera (biasanya `http://localhost:5173/`).

3. **Build untuk production**:
   ```bash
   npm run build
   ```
   Hasil build statis tersimpan di folder `dist/`.

4. **Preview hasil build lokal**:
   ```bash
   npm run preview
   ```

---

## 🌐 Panduan Deploy Gratis

Project ini telah dikonfigurasi dengan `base: './'` di `vite.config.ts`, sehingga dapat berjalan di sub-path manapun tanpa broken link gambar atau CSS.

### Pilihan 1: Deploy ke GitHub Pages (Otomatis via GitHub Actions)
File workflow sudah disiapkan di `.github/workflows/deploy.yml`.

1. Buat repository baru di GitHub Anda (misal `portfolio` atau `novihe.github.io`).
2. Hubungkan git lokal ke repository Anda:
   ```bash
   git remote add origin https://github.com/NoviHe/<nama-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. Di GitHub repository Anda:
   - Buka **Settings** -> **Pages**.
   - Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
4. GitHub Actions akan otomatis melakukan build dan mendeploy web portfolio Anda!

#### Atau Deploy Manual ke GitHub Pages via gh-pages:
```bash
npm run deploy
```

---

### Pilihan 2: Deploy ke Vercel (Paling Cepat & Populer)
File `vercel.json` telah disertakan.

1. Buka [https://vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik **Add New Project** -> **Import** repository portfolio Anda.
3. Vercel akan otomatis mendeteksi framework **Vite** dan folder output `dist`.
4. Klik **Deploy**. Web portfolio Anda langsung online dalam hitungan detik dengan domain gratis `*.vercel.app` dan HTTPS otomatis!

---

### Pilihan 3: Deploy ke Netlify
File `netlify.toml` telah disertakan.

1. Buka [https://netlify.com](https://netlify.com).
2. Tarik (drag & drop) folder `dist` ke dashboard Netlify, **atau** hubungkan repository GitHub Anda.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Web langsung live dengan domain gratis `*.netlify.app`.

---

## 👤 Profil Pemilik

- **Nama**: Novi Herlambang
- **Email**: [noovv9@gmail.com](mailto:noovv9@gmail.com)
- **GitHub**: [@NoviHe](https://github.com/NoviHe/)
- **LinkedIn**: [Novi Herlambang](https://www.linkedin.com/in/novi-herlambang/)
- **Instagram**: [@herlambang.saja](https://www.instagram.com/herlambang.saja/)
- **Domisili**: Pangandaran, Jawa Barat, Indonesia
