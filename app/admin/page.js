"use client";

import React, { useState, useEffect } from "react";

const GAS_API_URL = process.env.NEXT_PUBLIC_GAS_API_URL;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("berita");
  const [loading, setLoading] = useState(false);
  
  // State Data Dummy/Live
  const [beritaList, setBeritaList] = useState([
    { id: 1, title: "Pembunuh Berantai Ditangkap", category: "PENGUMUMAN", image: "/Shodiq.jpg" }
  ]);

  // Form States
  const [formBerita, setFormBerita] = useState({ title: "", category: "PENGUMUMAN", preview: "", imageBase64: "" });

  // Konversi File Gambar ke Base64 (untuk dikirim ke GAS / Drive / Cloudinary)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormBerita({ ...formBerita, imageBase64: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Tambah Berita
  const handleAddBerita = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newBerita = {
      action: "addBerita",
      ...formBerita,
      id: Date.now()
    };

    try {
      // Contoh Fetch ke Backend GAS
      if (GAS_API_URL) {
        await fetch(GAS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain" }, // GAS mensyaratkan text/plain agar tidak memicu preflight CORS
          body: JSON.stringify(newBerita)
        });
      }

      setBeritaList([...beritaList, { id: newBerita.id, title: formBerita.title, category: formBerita.category, image: formBerita.imageBase64 || "/Shodiq.jpg" }]);
      setFormBerita({ title: "", category: "PENGUMUMAN", preview: "", imageBase64: "" });
      alert("Data berhasil ditambahkan!");
    } catch (err) {
      alert("Gagal menambahkan data.");
    } finally {
      setLoading(false);
    }
  };

  // Hapus Berita
  const handleDeleteBerita = async (id) => {
    if (!confirm("Apakah Anda yakin ingin menghapus data ini?")) return;

    try {
      if (GAS_API_URL) {
        await fetch(GAS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ action: "deleteBerita", id })
        });
      }
      setBeritaList(beritaList.filter((item) => item.id !== id));
      alert("Data terhapus!");
    } catch (err) {
      alert("Gagal menghapus data.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col text-black">
      {/* Header Admin */}
      <header className="bg-[#4E9A73] text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Dashboard Admin Gamplong IV</h1>
        <a href="/" className="text-xs bg-[#E8B931] text-black font-bold px-3 py-1.5 rounded hover:bg-yellow-400">
          Lihat Website ↗
        </a>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar Navigasi */}
        <aside className="w-full md:w-64 bg-white p-4 border-r">
          <nav className="space-y-2">
            {["berita", "penduduk", "inventaris"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2.5 rounded-lg font-bold text-sm uppercase transition ${
                  activeTab === tab ? "bg-[#4E9A73] text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Kelola {tab}
              </button>
            ))}
          </nav>
        </aside>

        {/* Konten Utama Admin */}
        <main className="flex-1 p-6">
          {activeTab === "berita" && (
            <div className="space-y-6">
              {/* Form Tambah Berita */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-lg font-bold text-[#4E9A73] mb-4">Tambah Berita Baru</h2>
                <form onSubmit={handleAddBerita} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">JUDUL BERITA</label>
                    <input
                      type="text"
                      required
                      value={formBerita.title}
                      onChange={(e) => setFormBerita({ ...formBerita, title: e.target.value })}
                      className="w-full border p-2 rounded text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-1">KATEGORI</label>
                      <select
                        value={formBerita.category}
                        onChange={(e) => setFormBerita({ ...formBerita, category: e.target.value })}
                        className="w-full border p-2 rounded text-sm"
                      >
                        <option value="PENGUMUMAN">PENGUMUMAN</option>
                        <option value="KEGIATAN">KEGIATAN</option>
                        <option value="BERITA">BERITA</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">UPLOAD GAMBAR</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">RINGKASAN (PREVIEW)</label>
                    <textarea
                      rows="3"
                      required
                      value={formBerita.preview}
                      onChange={(e) => setFormBerita({ ...formBerita, preview: e.target.value })}
                      className="w-full border p-2 rounded text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#4E9A73] text-white px-4 py-2 rounded font-bold text-sm hover:bg-emerald-800"
                  >
                    {loading ? "Menyimpan..." : "PUBLIKASIKAN BERITA"}
                  </button>
                </form>
              </div>

              {/* Tabel Daftar Berita */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Daftar Berita</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="p-3">Gambar</th>
                        <th className="p-3">Judul</th>
                        <th className="p-3">Kategori</th>
                        <th className="p-3 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {beritaList.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                          </td>
                          <td className="p-3 font-semibold">{item.title}</td>
                          <td className="p-3">
                            <span className="text-[10px] bg-[#4E9A73] text-white px-2 py-0.5 rounded-full">
                              {item.category}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleDeleteBerita(item.id)}
                              className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-700"
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "penduduk" && (
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="text-lg font-bold text-[#4E9A73]">Kelola Data Penduduk</h2>
              <p className="text-sm text-gray-500 mt-2">Form pembaruan angka statistik penduduk dapat ditambahkan di sini.</p>
            </div>
          )}

          {activeTab === "inventaris" && (
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="text-lg font-bold text-[#4E9A73]">Kelola Inventaris</h2>
              <p className="text-sm text-gray-500 mt-2">Form pembaruan data inventaris desa dapat ditambahkan di sini.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}