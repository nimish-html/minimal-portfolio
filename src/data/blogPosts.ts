export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  views: number;
  content: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'the new benches',
    slug: 'the-new-benches',
    date: 'Mar 31, 2025',
    views: 498,
    excerpt: 'Observations on design, public spaces, and the subtle ways our environment shapes our behavior.',
    content: `# the new benches

There's something profound about the benches they installed in the park last month. Not just their sleek design or the way they curve slightly to cradle your back, but what they represent about intentional design.

## The Details Matter

The old benches were functional—metal slats, sturdy construction, built to last. But these new ones tell a different story. The wood grain flows naturally, the armrests are positioned at just the right height, and there's a subtle indent where your phone might rest.

Someone thought about how people actually use benches. Not just sitting, but the way we lean, the way we place our belongings, the way we orient ourselves toward or away from others.

## Design as Communication

Every design choice is a conversation with the user. The old benches said "sit here if you must." These new ones whisper "stay a while, be comfortable, notice the world around you."

It's the same principle I try to apply in digital design. Every pixel, every transition, every micro-interaction should feel intentional. Not because it's flashy, but because it serves the human on the other side of the screen.

## The Ripple Effect

I've noticed people linger longer now. Conversations happen more naturally. The space feels more alive, more human.

That's the power of thoughtful design—it doesn't just solve problems, it creates possibilities.

Sometimes the most profound changes come from the smallest details. A bench that understands how humans actually sit. A button that responds exactly as you'd expect. A search interface that anticipates what you're looking for.

The new benches remind me why I fell in love with design in the first place. It's not about making things pretty—it's about making life a little bit better, one small interaction at a time.`
  },
  {
    id: '2',
    title: 'making of scira',
    slug: 'making-of-scira',
    date: 'Mar 21, 2025',
    views: 1841,
    excerpt: 'The journey of building an AI-powered search engine from scratch, lessons learned, and what comes next.',
    content: `# making of scira

Building scira.ai has been one of the most challenging and rewarding projects I've ever undertaken. What started as a simple idea—"what if search could be more conversational?"—evolved into something much more complex and meaningful.

## The Beginning

The idea came to me during a late-night research session. I was jumping between multiple search engines, trying to piece together information about a complex topic. Each query returned fragments, and I found myself wishing for something that could understand context, remember what I'd already asked, and help me build understanding progressively.

That's when I realized: search shouldn't just find information—it should help you understand it.

## Technical Challenges

Building an AI-powered search engine is deceptively complex. It's not just about connecting to an LLM and calling it a day. You need:

- Real-time web crawling and indexing
- Intelligent query understanding
- Context preservation across conversations
- Source verification and citation
- Performance optimization for sub-second responses

The architecture went through three major iterations before we found something that worked reliably at scale.

## The Minimalist Approach

From the beginning, I knew scira had to be minimal. Not because minimalism is trendy, but because search is fundamentally about focus. When you're looking for information, every unnecessary element is a distraction.

The interface is intentionally sparse—just a search box and results. No ads, no clutter, no algorithmic manipulation. Just you and the information you're seeking.

## Sponsorship and Growth

Getting sponsored by Vercel and xAI was a turning point. Not just for the resources, but for the validation that we were building something valuable. It allowed us to focus on the product instead of worrying about infrastructure costs.

The growth has been organic and steady. People discover scira, try it, and then share it with others who value thoughtful, distraction-free search.

## What's Next

We're working on features that will make scira even more useful:
- Collaborative search sessions
- Research project organization
- Advanced citation and source management
- API access for developers

But the core philosophy remains unchanged: search should be about understanding, not just finding.

## Lessons Learned

Building scira taught me that the best products solve problems you personally experience. Every feature decision was informed by my own frustrations with existing search tools.

It also reinforced my belief in the power of constraints. By limiting ourselves to essential features, we created something more focused and useful than if we'd tried to build everything at once.

The journey continues, but I'm proud of what we've built so far. Scira represents everything I believe about good design: purposeful, minimal, and genuinely useful.`
  },
  {
    id: '3',
    title: 'begin.',
    slug: 'begin',
    date: 'Jan 16, 2025',
    views: 667,
    excerpt: 'Reflections on starting new projects, the courage to begin, and why the first step is always the hardest.',
    content: `# begin.

The hardest part of any project isn't the complex technical challenges or the late-night debugging sessions. It's the moment before you start—when the blank canvas stares back at you, infinite with possibility and paralyzed by potential.

## The Weight of Potential

Every new project carries the weight of what it could become. The revolutionary app that changes how people work. The elegant solution to a problem millions face. The creative expression that resonates with exactly the right person at exactly the right moment.

But potential is also a burden. It whispers that you're not ready, that you need to plan more, research more, prepare more. It convinces you that starting now would be premature, that you should wait until you have all the answers.

## The Courage to Begin

Beginning requires a specific kind of courage—not the courage to face known dangers, but the courage to step into uncertainty. To start building before you know exactly what you're building. To write the first line of code without knowing how the last line will look.

I've learned that this courage isn't something you find once and keep forever. It's something you have to summon fresh for each new beginning. Each project, each feature, each creative endeavor requires its own act of faith.

## The First Line

There's something magical about writing the first line of code for a new project. It transforms the abstract into the concrete, the possible into the actual. Suddenly, you're not just thinking about building something—you're building it.

\`\`\`javascript
// The beginning of everything
const app = express();
\`\`\`

That simple line has started countless applications, each one beginning with the same humble declaration of intent.

## Embracing Imperfection

The secret to beginning is accepting that your first attempt will be imperfect. The initial design will be flawed. The early code will be messy. The first draft will miss the mark.

But imperfect action beats perfect inaction every time. You can iterate on something that exists. You can't iterate on something that's still just an idea.

## The Compound Effect

Every beginning compounds. The project you start today teaches you something that makes the next project better. The skill you develop while building one thing becomes the foundation for building the next.

My journey with web development started with a simple HTML page. That led to learning CSS, then JavaScript, then frameworks, then backend development, then AI integration. Each beginning built on the last.

## Start Where You Are

You don't need the perfect idea, the perfect tools, or the perfect moment. You need to start where you are, with what you have, knowing what you know right now.

The best time to plant a tree was 20 years ago. The second best time is now.

## Begin Again

Even this blog post started with a blank page and a blinking cursor. The act of beginning never gets easier, but it does get more familiar. You learn to trust the process, to have faith that starting will lead somewhere worth going.

So here's to all the beginnings—the messy first drafts, the imperfect prototypes, the brave first steps into the unknown. They're not just the start of projects; they're the start of possibilities.

Begin.`
  }
];