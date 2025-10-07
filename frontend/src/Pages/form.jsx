import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useBlog } from '../Hooks/usePost';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { blogSchema } from '../Schemas/blogSchema'
import { motion, AnimatePresence } from 'framer-motion';

export default function Form() {
    const [contentcorrect, setcontentcorrect] = useState(false);
    const [namecorrect, setnamecorrect] = useState(false);
    const [headingcorrect, setheadingcorrect] = useState(false);
    const [contenterror, setcontenterror] = useState(false);
    const [nameerror, setnameerror] = useState(false);
    const [headingerror, setheadingerror] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(blogSchema) });
    const navigate = useNavigate();
    const formref = useRef();
    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();
    const buttonref = useRef();
    const { addPost } = useBlog();

    useGSAP(() => {
        gsap.fromTo(formref.current, { scale: 0 }, { scale: 1, ease: "bounce.out", duration: 0.5 });
    });

    function contentinputChange() {
        if (errors.content) {
            setcontentcorrect(false);
        } else {
            setcontentcorrect(true);
        }
    }

    function headinginputChange() {
        if (errors.heading) {
            setheadingcorrect(false);
        } else {
            setheadingcorrect(true);
        }
    }

    function nameinputChange() {
        if (errors.email) {
            setnamecorrect(false);
        } else {
            setnamecorrect(true);
        }
    }

    function liveValidation() {
        if (errors.content) {
            setcontenterror(true);
        } else {
            setcontenterror(false);
        }
        if (errors.heading) {
            setheadingerror(true);
        } else {
            setheadingerror(false);
        }
        if (errors.name) {
            setnameerror(true);
        } else {
            setnameerror(false);
        }
    }

    function buttonClickHandler(e) {
        e.preventDefault();
        setcontenterror(false);
        setheadingerror(false);
        setnameerror(false);
        buttonref.current.classList.remove('text-white');
        buttonref.current.classList.add('bg-cyan-300');
        buttonref.current.classList.add('text-black');
        addPost({ "name": input1Ref.current.value, "content": input3Ref.current.value, "heading": input2Ref.current.value });
        navigate('/Home');
    }

    function handleErrors(errors) {
        if (errors.content) {
            setcontenterror(true);
        } else {
            setcontenterror(false);
        }

        if (errors.heading) {
            setheadingerror(true);
        } else {
            setheadingerror(false);
        }

        if (errors.name) {
            setnameerror(true);
        } else {
            setnameerror(false);
        }
    }

    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden">
                <div className="fixed w-screen h-screen flex justify-center items-center z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-150 p-12 rounded-full blur-[50px] 500w:p-10"></div>
                </div>
                <div className="fixed w-fit h-fit bottom-0 right-0 z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-150 p-12 rouned-full blur-[50px]"></div>
                </div>
                <div className="w-screen h-screen flex justify-center items-center">
                    <div ref={formref} className="bg-white1 backdrop-blur-[40px] rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/20 shadow-auth z-[20]">
                        <form className="flex flex-col w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] z-[20]" onSubmit={handleSubmit(buttonClickHandler, handleErrors)}>
                            <label htmlFor="name" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-[20] pointer-events-auto">Name : </label>
                            <input ref={input1Ref} {...register('name')} id="name" type="text" className={(errors.name) ? "text-white rounded-[15px] border-1 border-red-700 shadow-button p-[10px] w-full z-[20] pointer-events-auto" : (namecorrect) ? "text-white rounded-[15px] border-1 border-green-400 shadow-button p-[10px] w-full z-[20] pointer-events-auto" : "text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-[20] pointer-events-auto"} placeholder="Enter your name..." />
                            {errors.name && (<AnimatePresence><motion.p initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="text-red-700 font-semibolg">{errors.name.message}</motion.p></AnimatePresence>)}
                            <br />
                            <label htmlFor="title" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-[20] pointer-events-auto">Blog-Title : </label>
                            <input ref={input2Ref} {...register('heading')} id="title" type="text" className={(errors.heading) ? "text-white rounded-[15px] border-1 border-red-700 shadow-button p-[10px] w-full z-[20] pointer-events-auto" : (headingcorrect) ? "text-white rounded-[15px] border-1 border-green-400 shadow-button p-[10px] w-full z-[20] pointer-events-auto" : "text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-[20] pointer-events-auto"} placeholder="Enter the title of blog..." />
                            {errors.heading && (<AnimatePresence><motion.p initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="text-red-700 font-semibold">{errors.heading.message}</motion.p></AnimatePresence>)}
                            <br />
                            <label htmlFor="content" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-[20] pointer-events-auto">Contents : </label>
                            <textarea ref={input3Ref} {...register('content')} id="content" className={(errors.content) ? "text-white rounded-[15px] border-1 border-red-700 shadow-button p-[10px] w-full z-[20] pointer-events-auto" : (contentcorrect) ? "text-white rounded-[15px] border-1 border-green-400 shadow-button p-[10px] w-full z-[20] pointer-events-auto" : "text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-[20] pointer-events-auto"} placeholder="Write the blog here..." />
                            {errors.content && (<AnimatePresence><motion.p initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="text-red-700 font-semibold">{errors.content.message}</motion.p></AnimatePresence>)}
                            <br />
                            <button ref={buttonref} type="submit" className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] mt-10 border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-[20] pointer-events-auto">Create Blog</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
