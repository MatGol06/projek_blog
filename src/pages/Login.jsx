import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const {error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert("Gagal Log Masuk: " + error.message);
        } else {
            navigate("/");
            alert("Welcome Back,Admin!");
            navigate('/');
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-surface border border-surfaceBorder rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-outfit font-extrabold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400 text-sm">Please sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Password</label>
                            <a href="#" className="text-xs text-accent hover:text-white transition-colors">Forgot?</a>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 bg-gradient-to-r from-accent to-accentSecondary text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sila Tunggu...' : 'Sign In'}
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Don't have an account? <Link to="#" className="text-accent hover:text-white transition-colors">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
