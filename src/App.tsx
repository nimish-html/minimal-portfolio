import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BlogPost } from './components/BlogPost';
import { NoteModal } from './components/NoteModal';
import { blogPosts } from './data/blogPosts';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  fullContent?: string;
}

function HomePage() {
  const [selectedNote, setSelectedNote] = React.useState<Note | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const notes: Note[] = [
    {
      id: '1',
      title: 'charizard',
      content: 'i guess charizard is\ncool',
      date: 'Mar 22, 2025',
      fullContent: `i guess charizard is cool

There's something fascinating about how Pokémon designs capture our imagination. Charizard, with its dragon-like appearance and fiery personality, represents the perfect balance between power and approachability.

The design philosophy behind Charizard reminds me of great product design - it's instantly recognizable, emotionally resonant, and has stood the test of time. Sometimes the simplest observations lead to the most interesting thoughts.

Maybe that's what makes certain designs timeless - they connect with something fundamental in how we perceive and interact with the world.`
    }
  ];

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-mono text-gray-900 leading-relaxed">
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-lg font-normal mb-1">Nimish Gahlot</h1>
          <p className="text-sm text-gray-600">delhi, in.</p>
        </header>

        {/* About */}
        <section className="mb-12">
          <p className="mb-4 text-sm leading-6">
            I'm a indie developer passionate about user interfaces and generative AI. Exploring 
            design and crafting thoughtful interactions. Obsessed with the small details, while 
            mastering the web one step at a time.
          </p>
          <p className="mb-4 text-sm leading-6">
            Building scira.ai - A minimalistic AI-powered search engine that helps you find 
            information of the internet. Scira is currently sponsored by Vercel and xAI.
          </p>
        </section>

        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">about me</h2>
          <p className="mb-4 text-sm leading-6">
            I started programming at age 18, curious about how the web works. Learning JavaScript 
            led me to build simple websites, which eventually evolved into creating products that 
            solve real-world problems.
          </p>
          <p className="text-sm leading-6">
            Over time, I fell in love with the web platform. There's something special about 
            creating experiences that anyone can access instantly from anywhere in the world. I 
            find real joy in crafting polished, thoughtful websites - a satisfaction that never 
            goes away.
          </p>
        </section>

        {/* Experiments */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">experiments</h2>
          <p className="mb-6 text-sm leading-6">
            Interactive experiments and projects exploring the intersection of design and 
            technology.
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start cursor-pointer transition-all duration-150 hover:text-gray-900 hover:font-medium p-2 -m-2 rounded hover:bg-gray-100">
              <div>
                <h3 className="text-sm">RGB Knob</h3>
                <p className="text-xs text-gray-600 mt-1">
                  An interactive color mixer built with custom knob controls. Experiment with RGB values 
                  to create unique colors in real-time.
                </p>
              </div>
              <span className="text-xs text-gray-500 ml-4">2025</span>
            </div>
            
            <div className="flex justify-between items-start cursor-pointer transition-all duration-150 hover:text-gray-900 hover:font-medium p-2 -m-2 rounded hover:bg-gray-100">
              <div>
                <h3 className="text-sm">MiniScira</h3>
                <p className="text-xs text-gray-600 mt-1">
                  A mini version of scira.ai. Built with Vercel AI SDK and Cohere.
                </p>
              </div>
              <span className="text-xs text-gray-500 ml-4">2025</span>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">blog</h2>
          <p className="mb-6 text-sm leading-6">
            I blog about things I'm learning, my experiences and thoughts on design and technology.
          </p>
          
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="flex justify-between items-center cursor-pointer transition-all duration-150 hover:text-gray-900 hover:font-medium p-2 -m-2 rounded hover:bg-gray-100 block"
              >
                <span className="text-sm transition-all duration-150">{post.title}</span>
                <span className="text-xs text-gray-500">{post.views} views · {post.date}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">notes</h2>
          <p className="mb-6 text-sm leading-6">
            Quick thoughts, ideas, and snippets I want to remember.
          </p>
          
          <div className="space-y-4">
            {notes.map((note) => (
            <div 
              key={note.id}
              onClick={() => handleNoteClick(note)}
              className="cursor-pointer transition-all duration-150 hover:text-gray-900 hover:font-medium hover:bg-gray-100 p-2 -m-2 rounded"
            >
              <h3 className="text-sm mb-1">{note.title}</h3>
              <p className="text-xs text-gray-600 mb-2">
                {note.content}
              </p>
              <span className="text-xs text-gray-500">{note.date}</span>
            </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">connect</h2>
          <p className="text-sm leading-6">
            contact me on{' '}
            <a href="#" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">X</a>{' '}
            <a href="#" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">GitHub</a>{' '}
            <a href="#" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">LinkedIn</a>{' '}
            - or send me an email at{' '}
            <a href="mailto:hey@zaidmukaddam.com" className="underline hover:no-underline transition-all duration-150 hover:text-gray-900 hover:font-medium">hey@zaidmukaddam.com</a>
          </p>
        </section>

        {/* Colophon */}
        <section className="mb-12">
          <h2 className="text-sm mb-4 text-gray-700">colophon</h2>
          <p className="text-sm leading-6">
            The design, tools, and technologies behind this website.
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
      
      <NoteModal 
        note={selectedNote}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
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