import { gsap } from "gsap";
import { useBlog } from '../Hooks/usePost';
import { BlogCard } from '../Components/blogcard';
import { useGSAP } from '@gsap/react';
import { AnimatePresence } from 'framer-motion';

export default function Post() {
    const { posts } = useBlog();
    return (
        <>
            <div className="w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden">
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-150 p-25 max-700w:p-10 rounded-full blur-[50px] 500w:p-10"></div>
                </div>
                <div className="fixed top-0 left-0 w-screen h-screen z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-150 p-[12px] rounded-full blur-[50px] "></div>
                </div>
                <div className="fixed bottom-0 right-0 w-fit h-fit z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 scale-150 p-10 rounded-full blur-[50px]">
                    </div>
                </div>
                <div className="w-screen h-fit flex mt-20 mb-20 flex-col items-center px-6 gap-6">
                    <AnimatePresence>
                        {posts.map((card, index) => (
                            <BlogCard key={card.id} name={card.name} content={card.content} heading={card.heading} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
};
