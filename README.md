# React + Vite + Tailwind (Mission)

Starter ini sudah siap untuk menerima HTML kamu dan di-slicing jadi komponen React.

## Jalankan

```bash
npm install
npm run dev
```

## Struktur
- `src/pages` : Beranda, Masuk, Daftar (router sudah siap)
- `src/index.css` : Tailwind directives + util classes
- `tailwind.config.js` : `content` sudah sesuai untuk Vite
- `src/components` : tambahkan komponen reusable di sini
- `src/assets/img` : taruh gambar

## Convert HTML → React
1. Pindahkan aset ke `src/assets` dan update path.
2. Ambil bagian UI (navbar, kartu, footer, dll.) dan buat komponen kecil.
3. Ganti class CSS menjadi utility Tailwind (atau copy class dari HTML kamu jika sudah Tailwind).
4. Tempelkan ke halaman terkait di `src/pages/*`.
