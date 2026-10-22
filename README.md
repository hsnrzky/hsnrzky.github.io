# Hasan Rizki Sulaiman — Portfolio

Portfolio pribadi Hasan Rizki Sulaiman, mahasiswa Sistem Informasi yang berfokus pada backend development dan pengolahan data.

🌐 **Website:** [https://hsnrzky.github.io](https://hsnrzky.github.io)

## Tentang

Website satu halaman ini menampilkan profil, proyek, keahlian, dan informasi kontak. Fitur yang tersedia:

- Tema terang dan gelap, dengan preferensi tema yang disimpan di browser.
- Console interaktif untuk melihat ringkasan profil, stack, dan status.
- Detail arsitektur proyek, endpoint, skema database, dan contoh payload.
- Navigasi responsif untuk perangkat desktop dan mobile.

## Teknologi

- HTML
- Tailwind CSS 4
- JavaScript
- GitHub Pages

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Perintah `npm run dev` membuat Tailwind memantau perubahan pada `src/input.css` dan menghasilkan `dist/output.css`. Buka `index.html` melalui server lokal untuk melihat website.

Untuk membuat CSS produksi:

```bash
npm run build
```

## Deploy ke GitHub Pages

Repository ini menggunakan branch `master` sebagai sumber dan menerbitkan situs dari branch `gh-pages` pada folder root. Di GitHub, buka **Settings → Pages**, lalu pilih **Deploy from a branch**, branch **`gh-pages`**, dan folder **`/(root)`**.

Untuk build dan menerbitkan perubahan dari branch `master`:

```bash
npm run deploy
```

Script tersebut membuat build, melakukan commit perubahan, lalu push ke `master` dan menerbitkan isi `master` ke `gh-pages`. Setelah deploy selesai, aktifkan **Enforce HTTPS** di pengaturan Pages agar koneksi pengunjung ke situs menggunakan HTTPS. HTTPS mengenkripsi koneksi, bukan file di repository.

## Struktur proyek

```text
.
├── dist/
│   └── output.css
├── src/
│   ├── input.css
│   └── script.js
├── index.html
├── package.json
└── tailwind.config.js
```

## Kontak

[hasanrizzky20@gmail.com](mailto:hasanrizzky20@gmail.com)
