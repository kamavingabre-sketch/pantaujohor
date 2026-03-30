import './globals.css'

export const metadata = {
  title: 'Pantau Johor - Pemantauan Petugas Kebersihan',
  description: 'Website pemantauan lokasi petugas kebersihan Melati dan Bestari di Kecamatan Medan Johor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-primary-white">{children}</body>
    </html>
  )
}