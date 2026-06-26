import { useParams, Link } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/" className="inline-block mb-8 text-sky-400 font-medium hover:underline">
        ← Kembali ke Halaman Utama
      </Link>
      
      <article>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-outfit font-extrabold mb-4">
            Artikel Dummy {id}
          </h1>
          <div className="text-slate-400">
            Ditulis pada 20 Oktober 2026 • 5 minit bacaan
          </div>
        </div>

        <div className="bg-slate-800/70 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md max-w-4xl mx-auto">
          <p className="mb-6 text-lg text-slate-300 leading-relaxed">
            Ini adalah kandungan artikel. Apabila kita dah hubungkan dengan pangkalan data (Supabase), teks di sini akan dipaparkan secara dinamik berdasarkan artikel mana yang pembaca klik di halaman depan.
          </p>
          <p className="mb-6 text-lg text-slate-300 leading-relaxed">
            Bayangkan ada perenggan yang panjang menceritakan tentang pengalaman belajar koding, cabaran _debugging_ di tengah malam, dan kepuasan apabila berjaya selesaikan masalah sistem.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Post;
