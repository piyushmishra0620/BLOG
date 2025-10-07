import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useBlog } from "../Hooks/usePost";
import { Trash2 } from 'lucide-react';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlogCard = (props) => {
    const cardRef = useRef();
    const { deletePost } = useBlog();
    useGSAP(() => {
        gsap.fromTo(".card", { opacity: 0, y: "-200%" }, { opacity: 1, y: 0, stagger: 0.05, ease: "bounce.Out" });
        cardRef.current.classList.remove("opacity-0");
    });
    const name = props.name; const content = props.content; const heading = props.heading;
    return (
        <>
            <AnimatePresence>
                <motion.div ref={cardRef} className="z-[130] card opacity-0 flex items-center justify-between gap-4 p-4 md:p-6 border-2 border-black bg-black/5 backdrop-blur-[50px] rounded-2xl shadow-md  w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] h-auto transition-all duration-300 ">
                    <div className="flex-1 min-w-0"><h1 className="font-bold text-base md:text-lg">{heading}</h1><br /><p className="text-sm md:text-base font-normal  mt-2 whitespace-nowrap overflow-hidden text-ellipsis">{content}</p></div>
                    <Trash2 color="red" size={24} onClick={() => { deletePost({ "name": name, "content": content, "heading": heading }) }} className="cursor-pointer flex shrink-0" />
                </motion.div>
            </AnimatePresence>
        </>
    );
};
