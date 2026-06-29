import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Home() {
   const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase 
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false }); 
      
      if (error) {
        console.log("Error tarik artikel:", error);
      } else {                  
        setPosts(data);
      }  
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <section className="text-center mb-20 mt-10">
        <h1 className="text-5xl md:text-7xl font-outfit font-extrabold tracking-tight mb-6 text-white">
          Welcome to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentSecondary">My Blog</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          I write about my journey learning Web Development, UI/UX, and random thoughts about technology.
        </p> 
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            to={`/post/${post.id}`}
            key={post.id} 
            className="group flex flex-col bg-surface border border-surfaceBorder rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          >
            <div className="w-full h-48 bg-[#0a0a0a] border-b border-surfaceBorder overflow-hidden relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              {/* Gradient overlay supaya teks tak tenggelam dan lebih kemas */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              {/* Lencana Kategori di atas gambar */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-xs text-white font-semibold uppercase tracking-wider">
                {post.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <span className="text-xs text-accent uppercase tracking-wider font-bold mb-3">{post.date}</span>
              <h2 className="text-2xl font-outfit font-bold mb-4 text-gray-100 leading-tight group-hover:text-white">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">{post.excerpt}</p>
              
              <div className="mt-auto flex items-center text-sm font-semibold text-accentSecondary group-hover:text-accent transition-colors">
                Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
