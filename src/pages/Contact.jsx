import { useState } from 'react';
import { supabase } from '../supabaseClient'; 

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  
  const handleSubmit = async (e) => {
    e.preventDefault();
     const {error} = await supabase.from('contacts').insert([
      {name: name, email: email, message: message}]);  
       
      if (error){
        alert("Alamak, ada masalah: " + error.message);
      }else{
        setIsSubmitted(true); 
        setName('');
        setEmail('');
        setMessage('');
      }
    };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-6 text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentSecondary">Connect</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Have a question or want to work together? Drop me a message below.
        </p>
      </div>

      <div className="bg-surface border border-surfaceBorder rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-outfit font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-accent hover:text-white transition-colors underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
                className="bg-black/50 border border-surfaceBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 bg-gradient-to-r from-accent to-accentSecondary text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:brightness-110 transition-all active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
