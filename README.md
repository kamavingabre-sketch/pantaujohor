# PantauJohor

Website landing page untuk pemantauan lokasi petugas kebersihan Melati dan Bestari di Kecamatan Medan Johor.

## Teknologi
- HTML / CSS / JavaScript
- Tema warna: biru, merah, putih
- Rencana deploy: Vercel (fitur statis) / Next.js upgrade nanti
- Rencana data: Supabase

## Struktur
- `index.html` - halaman utama
- `styles.css` - gaya visual
- `script.js` - logika frontend (placeholder)

## Jalankan lokal
1. Buka `index.html` di browser
2. Atau jalankan server static sederhana:

```bash
cd /home/phun/Desktop/pantaujohor
python3 -m http.server 8000
```

## Deploy ke Vercel
1. Buat project baru di Vercel.
2. Hubungkan ke repositori GitHub atau upload folder `pantaujohor`.
3. Set build command: tidak perlu (static) atau `npm run build` jika Next.js.
4. Output directory: `.` (root folder) jika static.

## Integrasi Supabase (rencana)
1. Buat project di https://app.supabase.com
2. buat tabel `petugas`, `lokasi`, `riwayat`
3. Tambahkan key API di frontend/backend dan gunakan SDK:

```js
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'PUBLIC_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)
```

4. Simpan lokasi GPS petugas dan panggil data ke tampilan peta.

## Fitur selanjutnya
- Peta interaktif (Google Maps / Leaflet)
- Autentikasi petugas (login)
- Rute harian dan statistik area
- Notifikasi tugas selesai
