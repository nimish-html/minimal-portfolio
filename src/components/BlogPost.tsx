import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 font-mono text-gray-900 leading-relaxed">
        <div className="max-w-2xl mx-auto px-6 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            back to home
          </Link>
          <h1 className="text-lg font-normal mb-4">Post not found</h1>
          <p className="text-sm text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-mono text-gray-900 leading-relaxed">
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150 mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          back to home
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-xl font-normal mb-2">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span>{post.date}</span>
          </div>
        </header>

        {/* Post Content */}
        <article className="prose prose-sm max-w-none">
          <div className="text-sm leading-7 space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-lg font-normal mt-8 mb-4 first:mt-0">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-base font-normal mt-6 mb-3 text-gray-700">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              
              // Handle code blocks
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```\w*\n?/, '').replace(/```$/, '');
                return (
                  <pre key={index} className="bg-gray-100 p-4 rounded text-xs overflow-x-auto my-4">
                    <code>{codeContent}</code>
                  </pre>
                );
              }
              
              // Handle regular paragraphs
              return (
                <p key={index} className="text-sm leading-6 text-gray-900">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Post Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            <ArrowLeft size={16} className="mr-2" />
            back to all posts
          </Link>
        </footer>

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
};