import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [image, setImage] = useState('/frontend_banner.png');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
        const {data: { session } } = await supabase.auth.getSession();

        if (!session) {
            alert("Anda kena log masuk dulu!");
            navigate('/login');
        }
    }
    checkUser();
  }, [navigate]);

  const handleCreate = async (e) => {
    e.preventDefault();
    
    // Tembak data artikel ke jadual 'posts'
    const { error } = await supabase
      .from('posts')
      .insert([
        { title: title, excerpt: excerpt, category: category, image: image, content: content}
      ]);

    if (error) {
      alert("Gagal simpan artikel: " + error.message);
    } else {
      alert("Artikel berjaya diterbitkan!");
      navigate('/'); // Bawa pengguna balik ke muka depan (Home)
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-4xl font-outfit font-extrabold text-white mb-8">
        Buat Artikel <span className="text-accent">Baru.</span>
      </h1>
      
      <div className="bg-surface border border-surfaceBorder rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <form onSubmit={handleCreate} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Tajuk Artikel</label>
            <input 
              type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
              className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
              placeholder="Contoh: Belajar React Asas"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Ringkasan (Excerpt)</label>
            <textarea 
              rows="3" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required
              className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
              placeholder="Pendahuluan ringkas artikel ini..."
            ></textarea>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>Isi Penuh Artikel</label>
            <textarea 
              rows="10" value={content} onChange={(e) => setContent(e.target.value)} required
              className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
              placeholder="Tulis artikel panjang awak di sini..."
            ></textarea>
            </div>   
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Kategori</label>
              <select 
                value={category} onChange={(e) => setCategory(e.target.value)}
                className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Design">Design</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Gambar URL</label>
              <input 
                type="text" value={image} onChange={(e) => setImage(e.target.value)} required
                className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <button type="submit" className="mt-4 bg-gradient-to-r from-accent to-accentSecondary text-white font-bold py-4 rounded-lg hover:brightness-110 transition-all">
            Terbitkan Artikel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
