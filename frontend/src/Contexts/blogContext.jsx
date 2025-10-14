import { createContext, useState } from 'react';

const BlogContext = createContext();
const arr = [
    {
        "id":1,
        "name": "Priya Sharma",
        "content": "Artificial Intelligence is no longer confined to science fiction — it is part of our daily routine. From virtual assistants like Siri and Alexa to personalized recommendations on Netflix and Amazon, AI subtly shapes our decisions. At workplaces, AI automates repetitive tasks and helps teams make data-driven decisions. In healthcare, it diagnoses diseases faster than ever before. Even our social media feeds are curated using AI algorithms. However, as AI grows more capable, ethical challenges arise — data privacy, job automation, and algorithmic bias. The key lies in finding balance: using AI to enhance human potential rather than replace it. The future of AI isn’t machines ruling us — it’s humans and machines working together smarter than ever.",
        "heading": "The Rise of AI in Everyday Life"
    },
    {
        "id":2,
        "name": "Rahul Mehta",
        "content": "We live in a world that constantly tells us to want more — more clothes, more gadgets, more space. But the minimalist lifestyle flips that mindset: what if having less actually gave you more peace? Minimalism isn’t just about decluttering your home; it’s about decluttering your mind. When you own fewer things, you worry less, clean less, and focus on what truly matters — experiences, relationships, and growth. Start small: clear your desk, your wardrobe, or your phone notifications. Ask yourself, 'Does this add value to my life?' If not, let it go. Minimalism is not about deprivation; it’s about intention. It’s a way to live deliberately and find joy in simplicity.",
        "heading": "Minimalism: The Art of Living with Less"
    },
    {
        "id":3,
        "name": "Piyus Mishra",
        "content": "Many people think coding is purely technical — lines of logic and syntax. But frontend development is where art meets logic. Every pixel, animation, and color choice tells a story. A frontend developer doesn’t just write HTML or CSS; they design experiences. They make websites interactive, responsive, and alive. Frameworks like React and Next.js have made it easier than ever to bring creative ideas to life. The most fulfilling part? Seeing your imagination come alive on the screen. That’s when code becomes creation — and programming turns into art. So next time you build a button, remember: you’re not just coding; you’re crafting an experience.",
        "heading": "From Code to Creativity: The Beauty of Frontend Development"
    },
    {
        "id":4,
        "name": "Ananya Verma",
        "content": "Traveling helps us connect with new cultures, cuisines, and perspectives — but it also leaves an environmental footprint. Sustainable travel is about exploring without harming the places we visit. Take small steps: carry a reusable water bottle, avoid single-use plastics, support local businesses, and choose eco-friendly accommodations. Even traveling by train instead of a short flight can make a difference. Sustainable travel doesn’t mean giving up comfort; it means traveling with consciousness. When you protect the planet while exploring it, every trip becomes more meaningful. The world is beautiful — let’s keep it that way.",
        "heading": "Sustainable Travel: Seeing the World Responsibly"
    },
    {
        "id":5,
        "name": "Aarav Patel",
        "content": "We live in a hyperconnected world, but real connection is harder than ever. Messages get lost in translation, and tone often disappears behind the screen. Effective communication starts with listening — truly listening — before responding. It’s about empathy, clarity, and timing. In the digital space, use fewer words but more intent. Whether you’re writing an email or recording a podcast, focus on your audience. Ask: 'What do they need to understand from me?' Remember, good communication isn’t just about speaking; it’s about making others feel heard.",
        "heading": "The Power of Effective Communication in the Digital Age"
    },
    {
        "id":6,
        "name": "Ananya Mishra",
        "content": "If you want to speak English more fluently, start reading — daily. Reading aloud improves pronunciation, rhythm, and confidence. When you read regularly, you absorb sentence patterns and vocabulary naturally. Your mind starts forming phrases faster when speaking. Try this: read for 10 minutes every day. Choose topics you love — novels, blogs, or short stories. Record yourself once a week and notice your improvement. Reading not only enriches your knowledge but also polishes your voice. The more you read, the smoother your speech becomes.",
        "heading": "How Reading Daily Improves Your Speaking Flow"
    },
    {
        "id":7,
        "name": "Neha Reddy",
        "content": "Building a full-stack app may seem intimidating, but once you understand the flow — frontend → backend → database → deployment — it becomes an exciting journey. Start with the frontend using HTML, CSS, and JavaScript. Then use Express.js to handle server routes and API logic. Store user data with PostgreSQL or MongoDB, depending on your preference. Finally, deploy your app on platforms like Render or Vercel. Seeing your first project live is one of the most rewarding feelings as a developer. Every great app begins as a small idea. Start building today — even if it’s simple.",
        "heading": "Building Your First Full Stack App: A Detailed Guide"
    },
    {
        "id":8,
        "name": "Rohan Gupta",
        "content": "Happiness isn’t something we find outside — it’s something we understand within. According to the study of universal human values, happiness arises from harmony between what we think, what we feel, and what we do. When our desires and actions align with our values, we feel peaceful and fulfilled. But when they conflict, we experience stress and confusion. Spend time reflecting on what truly matters to you — not what society expects. Practice gratitude and compassion daily. Real happiness isn’t temporary pleasure; it’s lasting contentment that comes from self-understanding.",
        "heading": "The Science of Self and Happiness"
    },
    {
        "id":9,
        "name": "Sneha Kapoor",
        "content": "Bollywood isn’t just about songs and dance — it’s a mirror of Indian life. Every film tells a story about love, family, struggle, or dreams, reflecting the emotions of millions. From the golden era of Raj Kapoor to today’s modern hits, Bollywood has evolved with society. It has shaped our language, fashion, and even our ideals of romance. More than entertainment, it’s a cultural phenomenon that unites people across generations. Bollywood reminds us that emotions are universal — and that storytelling will always be India’s heartbeat.",
        "heading": "The Magic of Bollywood: How Movies Reflect Our Culture"
    },
    {
        "id":10,
        "name": "Arav Mishra",
        "content": "Deployment is the final and most satisfying step in app development. Vercel makes hosting full-stack apps simple, fast, and free for personal projects. Here’s how to do it: push your project to GitHub, connect your repository to Vercel, and set the root directory for your frontend or backend. Add environment variables like MongoDB URI or API keys as needed. Once deployed, every code push automatically updates your live site. Deployment isn’t just about hosting — it’s about sharing your creation with the world.",
        "heading": "How to Deploy a MERN Stack App on Vercel"
    }
];


export const BlogProvider = (props) => {
    const [posts, setPosts] = useState(arr);

    function addPost(post) {
        setPosts([...posts, post]);
    }

    function deletePost(post) {
        setPosts(posts.filter(p=>p.name!=post.name || p.heading!=post.heading || p.content!=post.content));
    }
    return (
        <BlogContext.Provider value={{ posts, addPost, deletePost }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContext;
