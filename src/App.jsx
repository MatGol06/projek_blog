import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans selection:bg-accent selection:text-white">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-black/80 backdrop-blur-md border-b border-surfaceBorder sticky top-0 z-50">
          <Link to="/" className="text-2xl font-outfit font-extrabold tracking-wider text-white">
            AzamTajuddin-Blog<span className="text-accent">.</span>
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="font-medium text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="#" className="font-medium text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/login" className="font-medium text-gray-400 hover:text-white transition-colors">
              Login
            </Link>
            <Link to="/contact" className="font-medium text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center p-8 text-gray-500 border-t border-surfaceBorder bg-black">
          <p>© {new Date().getFullYear()} AzamTajuddin-Blog. Built with React & Supabase.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
