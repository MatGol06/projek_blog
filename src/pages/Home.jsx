import { Link } from 'react-router-dom';

function Home() {
  // Data mock (nanti kita akan ambil dari database Supabase)
  const posts = [
    {
      id: 1,
      title: "Kenapa React Sangat Popular Pada 2026?",
      excerpt: "Satu pandangan mendalam kenapa framework dari Facebook ini masih merajai dunia frontend development...",
      date: "12 Oct 2026",
      category: "Frontend"
    },
    {
      id: 2,
      title: "Mula Belajar Supabase: Alternatif Firebase",
      excerpt: "Cara pantas untuk bina backend lengkap dengan database Postgres dan Authentication...",
      date: "15 Oct 2026",
      category: "Backend"
    },
    {
      id: 3,
      title: "Tips UI/UX Untuk Developer",
      excerpt: "Macam mana nak buat website nampak 'mahal' walaupun anda tak pandai design...",
      date: "18 Oct 2026",
      category: "Design"
    }
  ];

  return (
    <div>
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-outfit font-extrabold tracking-tight mb-4">
          Selamat Datang ke <span className="text-sky-400">Blog Saya</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Saya menulis tentang perjalanan saya belajar Web Development, UI/UX dan perkara-perkara rawak tentang teknologi.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="flex flex-col bg-slate-800/70 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-sky-400"
          >
            <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-white/20 font-outfit text-3xl font-bold">
              {post.category}
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <span className="text-sm text-sky-400 font-semibold mb-2">{post.date}</span>
              <h2 className="text-2xl font-outfit font-bold mb-3 leading-tight">{post.title}</h2>
              <p className="text-slate-400 text-sm mb-6 flex-1">{post.excerpt}</p>
              
              <div className="mt-auto flex justify-between items-center">
                <Link 
                  to={`/post/${post.id}`} 
                  className="bg-gradient-to-br from-sky-400 to-indigo-400 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:brightness-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                  Baca Penuh
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
