# Pantau Johor

Website pemantauan lokasi petugas kebersihan Melati dan Bestari di Kecamatan Medan Johor.

## Teknologi

- **Frontend**: Next.js dengan Tailwind CSS
- **Deployment**: Vercel
- **Database**: Supabase

## Setup Lokal

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser

## Deploy ke Vercel

1. Push kode ke GitHub
2. Daftar/Login ke [Vercel](https://vercel.com)
3. Import project dari GitHub
4. Deploy otomatis

## Setup Supabase

1. Buat akun di [Supabase](https://supabase.com)
2. Buat project baru
3. Copy URL dan anon key dari project settings
4. Buat file `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. Untuk fitur data, akan ditambahkan nanti

## Warna Tema

- Biru: #0033A0
- Merah: #D52B1E
- Putih: #FFFFFF

## Fitur Kedepan

- Real-time tracking lokasi petugas
- Dashboard admin
- Laporan aktivitas
- Notifikasi