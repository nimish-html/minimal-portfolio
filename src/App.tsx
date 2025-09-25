import { Routes, Route, Link } from 'react-router-dom';
import { BlogPost } from './components/BlogPost';
import { ExperimentCard } from './components/ExperimentCard';
import { blogPosts } from './data/blogPosts';

function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 font-mono text-gray-900 leading-relaxed">
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-lg font-normal mb-1">nimish gahlot</h1>
          <p className="text-sm text-gray-600">delhi, in.</p>
        </header>

        {/* About */}
        <section className="mb-12">
          <p className="mb-4 text-sm leading-6">
            i'm a marketer turned developer passionate about llms and agentic workflows. Exploring how to use ai to automate marketing, and support functions. 
            obsessed with the small details, and running long distances.
          </p>
          <p className="mb-4 text-sm leading-6">
            building <a href="https://www.typesm.art/" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium" target="_blank" rel="noreferrer">typesm.art</a> - a content automation platform that automatically repurposes your x content for linkedIn and blueSky. <br></br>
            in the coming year, we would be expanding it to other social platforms, blogs, yt videoes and more.
          </p>
        </section>

        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">about me</h2>
          <p className="mb-4 text-sm leading-6">
            i graduated from iit bombay in 2021, since then i have been working closely with founders to scale their products.
          </p>
          <p className="text-sm leading-6">
          last year, i took the leap of faith to start my own startup but realised that starting up as a non tech founder is a significant disadvantage.
          so i started learning how to code in the last 9 mos, and currently i have my own app typesm.art and customers who even pay to use my code :)
          </p>
        </section>

        {/* Experiments */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">experiments</h2>
          <p className="mb-6 text-sm leading-6">
            exploring the capabilties of frontier ai models
          </p>
          
          <div className="space-y-4">

          <ExperimentCard
              title="PerfectSync"
              description="A tool that fixes audio errors of recorded videos. Built with React, Anthropic and ElevenLabs."
              year="2025"
              previewImage="https://images.unsplash.com/photo-1648134859186-a05fb609f41e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxzZWFyY2glMjBpbnRlcmZhY2UlMjBtaW5pbWFsaXN0JTIwd2VifGVufDB8MHx8fDE3NTgyNzkxODB8MA&ixlib=rb-4.1.0&q=85"
              previewAlt="PerfectSync interface"
            />
          

            <ExperimentCard
              title="Bolt Hackathon Website"
              description="My entry for the Bolt Hackathon Website contest. It was one of the runner ups. Built entirely in Bolt."
              year="2025"
              previewImage="https://images.unsplash.com/photo-1658204212985-e0126040f88f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxpbnRlcmZhY2UlMjBjb2xvciUyMGNvbnRyb2xzJTIwd2ViJTIwYXBwfGVufDB8MHx8fDE3NTgyNzkxODF8MA&ixlib=rb-4.1.0&q=85"
              previewAlt="Bolt Hackathon Website contest entry"
            />
            
            <ExperimentCard
              title="SketchMind"
              description="A tool that translates live group calls into visualisations like flow charts and mind maps. Built with React, OpenAI and MermaidJS."
              year="2025"
              previewImage="https://images.unsplash.com/photo-1648134859186-a05fb609f41e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxzZWFyY2glMjBpbnRlcmZhY2UlMjBtaW5pbWFsaXN0JTIwd2VifGVufDB8MHx8fDE3NTgyNzkxODB8MA&ixlib=rb-4.1.0&q=85"
              previewAlt="SketchMind interface"
            />
          </div>
        </section>

        {/* Blog */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">blog</h2>
          <p className="mb-6 text-sm leading-6">
            I blog about things i'm learning, my experiences and thoughts on technology, and life.
          </p>
          
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="flex justify-between items-center cursor-pointer transition-all duration-150 hover:text-gray-900 hover:font-medium p-2 -m-2 rounded hover:bg-gray-100 block"
              >
                <span className="text-sm transition-all duration-150">{post.title}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </Link>
            ))}
          </div>
        </section>


        {/* Connect */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">connect</h2>
          <p className="text-sm leading-6">
            contact me on{' '}
            <a href="https://x.com/anthropiast" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">X</a>{' '}
            <a href="https://github.com/nimish-html" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">GitHub</a>{' '}
            <a href="https://www.linkedin.com/in/nimish-gahlot/" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">LinkedIn</a>{' '}
            - or send me an email at{' '}
            <a href="mailto:nimish@nimishbuilds.xyz" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">nimish@nimishbuilds.xyz</a>
          </p>
        </section>

        {/* Colophon */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">colophon</h2>
          <p className="text-sm leading-6">
            Built with Vite. Started as a project in Bolt, finished with Cursor. 100% vibe coded. This site is open sourced — fork it{' '}
            <a href="https://github.com/nimish-html/minimal-portfolio.git" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium" target="_blank" rel="noreferrer">here</a>.
          </p>
        </section>

      </div>
      
      {/* Signature Footer */}
      <footer className="max-w-2xl mx-auto px-6 pb-8">
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xs text-gray-400">created with</span>
            <span className="text-xs text-gray-400">🤍</span>
            <span className="text-xs text-gray-400">by</span>
            <img 
              src="/nimish_signature_horizontal.png" 
              alt="Nimish signature" 
              className="h-14 opacity-60 hover:opacity-80 transition-opacity duration-200"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;