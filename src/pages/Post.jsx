import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Post() {
  const { id } = useParams(); // Ambil ID dari URL (contoh: /post/5)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id) // Cari artikel yang ID nya sama dengan URL
        .single();    // Kita cuma nak SATU artikel sahaja

      if (error) {
        console.log("Error tarik artikel:", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchSinglePost();

    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if(session){
          setIsAdmin(true);
      }
    };
    
    checkUser();
  }, [id]);
  const handleDelete = async () => {
     const isConfirm = window.confirm("Adakah anda pasti mahu memadam artikel ini?");
     if(isConfirm){
      const {error} = await supabase.from('posts').delete().eq('id', id);//Padam artikel dengan id yg sama dengan URL
      if(error){
          console.log("Gagal padam:", error);
      }else{
          alert("Artikel berjaya dipadam.");
          navigate('/');//Pulang ke home
      }
     }
  };
  // Kalau tengah loading...
  if (loading) {
    return <div className="text-center mt-20 text-accent text-xl">Memuatkan artikel...</div>;
  }

  // Kalau artikel tak wujud / kena delete
  if (!post) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl text-white font-bold mb-4">Artikel Tidak Dijumpai</h1>
        <Link to="/" className="text-accent underline hover:text-white">Kembali ke Laman Utama</Link>
      </div>
    );
  }

  // Paparan Artikel Sebenar
  return (
    <article className="max-w-4xl mx-auto bg-surface border border-surfaceBorder rounded-3xl overflow-hidden mt-10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      
      {/* Gambar Header */}
      <div className="w-full h-64 md:h-96 relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <span className="bg-accent/20 text-accent border border-accent/30 px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase backdrop-blur-md">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-white mt-4 leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Isi Kandungan Artikel */}
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-10 pb-10 border-b border-surfaceBorder">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-accentSecondary p-[2px]">
            <div className="w-full h-full bg-surface rounded-full flex items-center justify-center font-bold text-white">
              A
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-200">Azam Tajuddin</p>
            <p>{new Date(post.created_at).toLocaleDateString('ms-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {/* Bahagian Content (Kita letak whitespace-pre-wrap supaya 'enter' / perenggan tak hilang) */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t border-surfaceBorder">
          <Link to="/" className="inline-flex items-center text-accent hover:text-white transition-colors font-semibold">
            <span className="mr-2">←</span> Kembali ke senarai artikel
          </Link>
          {/* Butang ini muncul untuk role admin sahaja */}
          {isAdmin && (
            <button onClick={handleDelete} 
            className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg font-bold transition-all border border-red-500/20">
            Padam Artikel
            </button> 
          )

          }
        </div>
      </div>
    </article>
  );
}

export default Post;
