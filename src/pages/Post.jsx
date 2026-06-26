import { useParams, Link } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/" className="inline-block mb-10 text-gray-400 font-medium hover:text-white transition-colors">
        ← Back to Home
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-6 text-white leading-tight">
            Dummy Article {id}
          </h1>
          <div className="text-gray-500 font-medium tracking-wide">
            Written on Oct 20, 2026 • 5 min read
          </div>
        </div>

        <div className="bg-surface border border-surfaceBorder rounded-3xl p-8 md:p-14">
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p className="mb-6 leading-relaxed">
              This is the article content. Once we connect this to the database (Supabase), the text here will be dynamically displayed based on which article the reader clicked on the home page.
            </p>
            <p className="mb-6 leading-relaxed">
              Imagine there is a long paragraph talking about the experience of learning to code, the challenges of late-night debugging, and the satisfaction of finally solving a system issue.
            </p>
            <h2 className="text-2xl font-outfit font-bold text-white mt-10 mb-4">Why is React Still Relevant?</h2>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Post;
