# 🚀 Panduan Asas React (Khas Untuk Projek Blog Anda)

Selamat datang ke dunia **React**! Fail ini adalah nota ringkas untuk bantu anda faham bagaimana aplikasi blog yang kita sedang bina ini berfungsi di sebalik tabir.

---

## 1. Apa Itu React?
Bayangkan anda membina sebuah rumah menggunakan blok Lego. Dalam React, **semua benda adalah blok Lego (dipanggil sebagai Komponen)**. 
Daripada membina satu halaman tapak web yang panjang dan berselirat, React mengajar kita untuk pecahkan tapak web kepada kepingan kecil yang boleh digunakan semula.

Contoh dalam projek kita:
- `Home.jsx` adalah satu komponen.
- `Login.jsx` adalah satu komponen.
- `Contact.jsx` adalah satu komponen.
Kesemua komponen ini dicantumkan di dalam komponen utama yang bernama `App.jsx`.

---

## 2. JSX (HTML di dalam JavaScript)
Kalau dulu, kita asingkan fail `.html` dan `.js`. Dalam React, kita tulis HTML terus ke dalam fail JavaScript! Ini dipanggil **JSX**.

**Bentuk Asas Komponen:**
```jsx
// 1. Fungsi JavaScript
function ButangCantik() {
  
  // 2. Return (Pulangkan) rupa bentuk HTML (JSX)
  return (
    <button className="bg-blue-500 text-white">
      Tekan Saya
    </button>
  );
}
// 3. Eksport komponen ini supaya fail lain boleh guna
export default ButangCantik;
```
*Perhatian: Di dalam JSX, kita mesti gunakan `className`, bukannya `class` macam HTML biasa.*

---

## 3. State (Memori Komponen)
Macam mana tapak web boleh ingat apa yang pengguna taip? Kita gunakan **State** (`useState`). State adalah seperti "otak" atau "memori sementara" untuk sesebuah komponen.

Cuba ingat balik fail `Login.jsx` kita semalam:
```jsx
import { useState } from 'react';

function Login() {
  // Ini adalah "State"
  const [email, setEmail] = useState('');
  
  return (
    <input 
       value={email} 
       onChange={(e) => setEmail(e.target.value)} 
    />
  );
}
```
Setiap kali anda menaip sesuatu di dalam kotak email, `setEmail` akan dipanggil, dan React akan terus kemas kini memori `email` pada saat itu juga. Sangat pantas!

---

## 4. Single Page Application (SPA) & Router
Pernah tak anda perasan bila anda klik butang "Contact" atau "Login" di web blog kita ni, **paparan bertukar dengan serta-merta tanpa loading (page refresh)**?

Inilah kuasa **React Router**. 
Sebenarnya, kita hanya ada **SATU** muka surat HTML sahaja (`index.html`). Tapi di dalam `App.jsx`, kita ada alat penapis (Router):
- Bila URL `/contact` -> React buang komponen `Home`, dan terus lukis komponen `Contact`.
- Bila URL `/login` -> React buang komponen `Contact`, dan lukis komponen `Login`.
Semuanya berlaku sekelip mata di dalam browser!

---

## 5. Virtual DOM (Kenapa React Sangat Laju?)
Kalau anda guna HTML biasa dan tukar satu perkataan, browser kena lukis semula (repaint) keseluruhan skrin. Ini sangat lambat.

React menggunakan **Virtual DOM (Lukisan Klon)**. 
Bila ada perubahan (contoh: anda taip password), React akan:
1. Buat perubahan pada lukisan klon di dalam memori komputernya.
2. Bandingkan lukisan klon tu dengan skrin sebenar.
3. React akan cari: *"Oh, cuma huruf 'A' je yang bertambah pada kotak password."*
4. React akan kemas kini **huruf 'A' itu sahaja** di skrin, tanpa usik benda lain (seperti butang, gambar latar belakang, dsb).

---

## 📝 Ringkasan Workflow Kita
1. Buka `App.jsx` (Ibu kepada segala komponen).
2. Tulis komponen baru di dalam folder `src/pages/`.
3. Import komponen itu ke dalam `App.jsx`.
4. Guna Tailwind CSS (kelas panjang-panjang) untuk bagi cantik.
5. Jalankan `npm run dev` untuk tengok hasil.

Teruskan bereksperimen! React ni nampak susah pada hari pertama, tapi bila dah faham konsep "Lego", ia adalah alat yang sangat menyeronokkan.

---

## 🛠️ Cara Membuat Projek React Baru (Vite)
Jika pada masa hadapan anda ingin mencipta projek React yang baharu dari kosong (seperti projek ini), buka terminal dan jalankan arahan-arahan ini mengikut urutan:

```bash
# 1. Cipta projek baru (gantikan 'nama-projek' dengan nama pilihan anda)
npm create vite@latest nama-projek -- --template react

# 2. Masuk ke dalam folder projek tersebut
cd nama-projek

# 3. Muat turun dan pasang fail keperluan sistem
npm install

# 4. Jalankan server lokal untuk mula mengekod
npm run dev
```

---

## 🌟 Kuasa Sebenar React (Keupayaan Tahap Tinggi)
Apabila anda sudah mahir asas React, ini adalah contoh perkara canggih dan kompleks yang anda boleh capai (teknologi sama yang digunakan oleh syarikat besar seperti Facebook, Netflix, dan Airbnb):

1. **Pengurusan Memori Pusat (Global State):**
   Menggunakan alat seperti _Context API_ atau _Redux_ untuk simpan data penting (contoh: Status Login, Troli Membeli-belah) di satu "Otak Utama" yang boleh dibaca oleh mana-mana komponen tanpa masalah.

2. **Rendering Masa Nyata (Real-time Sync):**
   Dengan gabungan alat seperti _Supabase Realtime_, React pakar dalam melukis UI secara serta-merta. Sesuai untuk aplikasi _Live Chat_, Harga Saham, atau _Live Tracking_.

3. **Logik Boleh Kitar Semula (Custom Hooks):**
   Bukan setakat butang yang boleh dikitar semula, anda boleh bungkus logik yang kompleks (seperti pengiraan cukai atau menjejak lokasi GPS) menjadi `Custom Hook` untuk dipanggil ke mana-mana fail dengan satu baris kod.

4. **Prestasi Pantas & Tidak Tersekat (Concurrent Mode & Suspense):**
   Untuk aplikasi berskala besar, React membenarkan anda memaparkan UI sementara (seperti animasi _skeleton loading_) tanpa memberhentikan sistem, sambil menunggu data sebenar dimuat turun di belakang tabir.

5. **Membina Aplikasi Telefon Asli (React Native):**
   Kemahiran React (web) yang anda pelajari sekarang boleh dipindahkan sehingga **90%** untuk membina aplikasi telefon mudah alih sebenar (iOS & Android) melalui ekosistem **React Native**.
