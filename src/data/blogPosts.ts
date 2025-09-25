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
    title: 'forget mentors. find comrades.',
    slug: 'forget-mentors-find-comrades',
    date: 'Aug 24, 2025',
    views: 0,
    excerpt: 'stop searching for a mentor. start searching for your comrades.',
    content: `# forget mentors. find comrades.

when i started my journey, i had one goal: connect with people ahead of me

i thought the key to success was to find a mentor who would hand me the secret map. i was wrong

mentors are great. but comrades in the trenches are 100x better

i’ve shifted my entire focus. i no longer prioritize finding people who have already made it. i prioritize finding people who are right where i am now. the other founders in the arena, covered in dust and sweat, fighting the same battles i am

here’s why this is so much more powerful

we get to share what’s working, right now

we learn from each other’s mistakes in real-time

we keep the fire alive when things get tough

building a business is lonely, especially when you’re bootstrapping from india. your friends and family don't understand the obsession. the highs are high, and the lows are crushing. having people on the same rollercoaster makes all the difference. they get it. they don’t offer vague advice from a mountain top; they offer a hand up from the trench next to you

stop searching for a mentor. start searching for your comrades`
  },
  {
    id: '2',
    title: 'i ended up on a times square billboard. it was weird.',
    slug: 'i-ended-up-on-a-times-square-billboard-it-was-weird',
    date: 'Aug 10, 2025',
    views: 0,
    excerpt: 'the most rewarding experiences live on the other side of maximum discomfort.',
    content: `# i ended up on a times square billboard. it was weird.

so, a thing happened. i made it to times square

a picture of me, on a massive television, on the busiest street in the world . i had no idea it was happening

it all started with a hackathon hosted by @boltdotnew . i decided to participate and, for some reason, also decided to vlog my progress every single day

it was one of the most uncomfortable things i’ve ever done

i felt cringe recording myself

i felt stupid talking to a camera

i was editing videos late at night after my real agency work was done

it was a month of pure firefighting and feeling like an imposter. but i shipped the project. and then, a few weeks later, a friend sent me a photo. there i was, on a billboard in new york city, as a winner of the hackathon

the lesson here isn’t "work hard and you’ll end up in times square". the lesson is that the most rewarding experiences often live on the other side of maximum discomfort. the thing you are avoiding, the cringe-worthy action, the task that makes you feel like an idiot—that’s usually the thing you need to do most

go do the uncomfortable thing. you have no idea where it might lead`
  },
  {
    id: '3',
    title: 'growth is never linear',
    slug: 'growth-is-never-linear',
    date: 'Jul 22, 2025',
    views: 0,
    excerpt: 'growth is rarely linear; detach from outcomes and trust the process.',
    content: `# growth is never linear

growth is a liar. it seduces you with a steep, upward curve, then leaves you stranded on a plateau

i learned this the hard way with my youtube channel

my first 1,000 subscribers took only 4 months

my next 500 subscribers took 6 months

it felt like a failure. i was putting in the same effort, but the results had fallen off a cliff. the algorithm had forsaken me. i was tempted to quit, to chase a new shiny object

this is the moment that kills most creators and founders. the slump. the long, boring middle where the initial excitement is gone and the finish line is nowhere in sight

but the slump is where the real work is done. it’s a reminder that you can’t control the outcome, you can only control the process. this is the lesson i had to internalize

detach from the results

focus on making progress every day

trust the process and just keep going

my business is the same. there are good days, good weeks, and then sudden drops where nothing seems to work . that's the game. growth is rarely linear. your job is to keep showing up, especially when the chart isn’t going up and to the right`
  }
];