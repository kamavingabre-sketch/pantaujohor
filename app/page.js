export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-blue to-primary-red">
      <header className="bg-primary-blue text-primary-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Pantau Johor</h1>
          <p className="text-xl text-center mt-2">Pemantauan Lokasi Petugas Kebersihan</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary-blue mb-4">Selamat Datang di Sistem Pemantauan</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Website ini dirancang untuk memantau lokasi petugas kebersihan Melati dan Bestari di Kecamatan Medan Johor.
            Dengan sistem ini, kita dapat memastikan kebersihan daerah terjaga dengan baik.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">Petugas Melati</h3>
            <p className="text-gray-600 mb-4">Pantau lokasi dan aktivitas petugas kebersihan Melati.</p>
            <div className="bg-gray-200 h-48 rounded flex items-center justify-center">
              <span className="text-gray-500">Peta Lokasi - Coming Soon</span>
            </div>
          </div>

          <div className="bg-primary-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary-red mb-4">Petugas Bestari</h3>
            <p className="text-gray-600 mb-4">Pantau lokasi dan aktivitas petugas kebersihan Bestari.</p>
            <div className="bg-gray-200 h-48 rounded flex items-center justify-center">
              <span className="text-gray-500">Peta Lokasi - Coming Soon</span>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold text-primary-blue mb-4">Fitur Akan Datang</h3>
          <p className="text-gray-700">Real-time tracking, laporan aktivitas, dan notifikasi akan segera ditambahkan.</p>
        </section>
      </main>

      <footer className="bg-primary-blue text-primary-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Pantau Johor. Dibuat dengan Next.js dan Supabase.</p>
        </div>
      </footer>
    </div>
  )
}