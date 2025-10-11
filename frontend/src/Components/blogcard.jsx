import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useBlog } from "../Hooks/usePost";
import { Trash2 } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, usePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const BlogCard = (props) => {
    const navigate = useNavigate();
    const [isPresent, safeToRemove] = usePresence();
    const cardRef = useRef();
    const { deletePost } = useBlog();
    const [active, setActive] = useState(false);
    const [present, setPresent] = useState(true);

    useGSAP(() => {
        gsap.fromTo(cardRef.current, { opacity: 0, y: "-200%" }, { opacity: 1, y: 0, stagger: 0.05, ease: "bounce.Out" });
        cardRef.current.classList.remove("opacity-0");
    });

    useEffect(() => {
        if (!isPresent) {
            safeToRemove();
        }
    }, [isPresent]);

    const name = props.name; const content = props.content; const heading = props.heading;

    return (
        <>
            <motion.div layout exit={{ opacity: 0, x: "-150%" }} transition={{ ease: "easeInOut", duration: 0.5 }} ref={cardRef} className="relative overflow-hidden z-[130] opacity-0 flex items-center justify-between gap-4 p-4 md:p-6 border-2 border-black bg-black/5 backdrop-blur-[50px] rounded-2xl shadow-md  w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] h-auto transition-all duration-300 ease-in-out" onClick={() => setActive(!active)}>
                <div className="flex-1 min-w-0 z-[150]"><h1 className="font-bold text-base md:text-lg">{heading}</h1><br /><p className="text-sm md:text-base font-normal  mt-2 whitespace-nowrap overflow-hidden text-ellipsis">{content}</p></div>
                <Trash2 color="red" size={24} onClick={() => { setPresent(false); deletePost({ "name": props.name, "heading": props.heading, "content": props.content }); }} className="cursor-pointer flex shrink-0 z-[180]" />
                <AnimatePresence>
                    {active && present && <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: "0%" }} exit={{ opacity: 0, y: "100%" }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute top-0 left-0 w-full h-full bg-cyan-500/90 backdrop-blur-[90px] backdrop-brightness-50 backdrop-opacity-10  z-[250] rounded-2xl flex flex-col justify-center items-center">
                        <h1 className="text-black font-semibold mb-2">Written By {name}</h1>
                        <button className="border-2 border-black p-[10px] rounded-[20px] bg-cyan-500/90 text-black mt-2 cursor-pointer" onClick={() => { const arr = heading.split(" ");const slug = arr.join("-"); navigate(`/posts/${slug}`) }}>Read Blog</button>
                    </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </>
    );
};
