import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-slate-800/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <Link to="/" className="text-2xl font-outfit font-extrabold bg-gradient-to-br from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            MyDevBlog.
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="font-medium text-slate-400 hover:text-white transition-colors relative group">
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="#" className="font-medium text-slate-400 hover:text-white transition-colors relative group">
              Tentang
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="#" className="font-medium text-slate-400 hover:text-white transition-colors relative group">
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center p-8 text-slate-400 border-t border-white/10 bg-slate-800/30">
          <p>© {new Date().getFullYear()} MyDevBlog. Dibina dengan React & Supabase.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
