import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(SplitText);
const backendURI = import.meta.env.VITE_BACKEND_URI;

const Auth = () => {
    const navigate = useNavigate();
    const button1Ref = useRef();
    const button2Ref = useRef();
    const googleButton = useRef();
    const headingRef = useRef();
    const paragraphRef = useRef();
    const formRef = useRef();
    const [googleError, setgoogleError] = useState("");

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (Response) => {
            let code = Response.code;

            const res = await fetch(`${backendURI}/auth/google`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ code })
            });
            
            const data = await res.json();
            if (data.error) {
                setgoogleError(data.error);
            } else {
                navigate("/Home");
            }
        },
        onError: (error) => {
            setgoogleError("Google Login Failed.");
            console.error(error);
        }
    });

    const googleButtonClickHandler = () => {
        googleButton.current.classList.remove('text-white');
        googleButton.current.classList.add('bg-cyan-300');
        googleButton.current.classList.add('text-black');
        setTimeout(() => { googleLogin(); }, 100);
    }

    useGSAP(() => {
        let headings = SplitText.create(headingRef.current, {
            type: "chars"
        });
        let paragraphs = SplitText.create(paragraphRef.current, {
            type: "chars"
        });
        headings.chars.forEach(char => {
            char.classList.add(
                "bg-linear-120",
                "from-0%",
                "from-gradient1",
                "via-30%",
                "via-gradient3",
                "to-80%",
                "to-gradient2",
                "bg-clip-text",
                "text-transparent"
            );
            char.style.background = headingRef.current.style.background;
        });
        const tl = gsap.timeline();
        tl.fromTo(headings.chars, { opacity: 0, y: -50, scale: 2 }, { scale: 1, opacity: 1, y: 0, stagger: 0.2, ease: "bounce.out" })
            .fromTo(paragraphs.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03, ease: "power3.inOut" })
            .fromTo(formRef.current, { scale: 0 }, { scale: 1, ease: "bounce.out", duration: 1 });
    });

    function handleButton1Click() {
        button1Ref.current.classList.remove('text-white');
        button1Ref.current.classList.add('bg-cyan-300');
        button1Ref.current.classList.add('text-black');
        setTimeout(() => navigate("/Signup"), 200);
    }

    function handleButton2Click() {
        button2Ref.current.classList.remove('text-white');
        button2Ref.current.classList.add('bg-cyan-300');
        button2Ref.current.classList.add('text-black');
        setTimeout(() => navigate("/Login"), 200);
    }

    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden z-5">
                <div className="absolute top-0 left-0 max-500w:hidden w-screen min-h-fit  flex justify-start">
                    <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)]  rounded-full p-70 blur-[50px]"></div>
                </div>
                <div className="pt-10">
                    <h1 ref={headingRef} className="text-center  text-[40px] max-500w:text-[35px] max-400w:text-[30px] font-bold z-10">Welcome To BLOGIFY</h1>
                    <p ref={paragraphRef} className="text-center text-p1 text-[18px] max-500w:text-[16px] max-400w:text-[12px] font-semibold hyphens-manual z-10">Continue With BLOGIFY to enjoy premium BLOG content.</p>
                </div>
                <div className="mt-20 flex justify-center items-center min-w-screen min-h-60">
                    <div ref={formRef} className="bg-white1 backdrop-blur-[40px] rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/20 shadow-auth z-10">
                        <div className="flex flex-col items-center-safe h-fit justify-between gap-2 w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] mb-10 max-400w:mb-7 z-20">
                            <button ref={button1Ref} className="text-white text-1xl font-sans font-semibold py-4 w-full  rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm  active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-[130]" onClick={handleButton1Click}>Sign Up</button>
                            <button ref={button2Ref} className="text-white text-1xl font-sans font-semibold py-4 w-full  rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click  active:bg-cyan-300 duration-200 ease-in-out z-[130]" onClick={handleButton2Click}>Login</button>
                        </div>
                        <div className="flex justify-center items-center-safe w-full mb-10 max-400w:mb-7">
                            <span className="bg-white  w-full h-[0.2px] p-[0.2px] me-1.5"></span>
                            <span className="text-white text-1xl font-semibold">OR</span>
                            <span className="bg-white w-full p-[0.2px] h-[0.2px] ms-1.5"></span>
                        </div>
                        <div className="flex flex-col justify-between items-center-safe w-full h-fit gap-2 z-20">
                            <button ref={googleButton} className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm  active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-[130]" onClick={() => googleButtonClickHandler()}>Continue With Google</button>
                            <AnimatePresence>{googleError && <motion.p initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="text-red-700 font-bold mt-2">{googleError}</motion.p>}</AnimatePresence>
                            <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button z-[130]">Continue With GitHub</button>
                            <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button z-[130]">Continue With Apple</button>
                        </div>
                        <div className="absolute flex justify-start bottom-8 w-full h-fit">
                            <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-150 p-12 rounded-full blur-[50px] 500w:p-10"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex mt-35 justify-center w-screen h-fit z-[1]">
                    <div className=" bg-radial-[at_75%_50%] scale-175 from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% p-12 500w:p-8 rounded-full blur-[50px]"></div>
                </div>
            </div>
        </>
    )
}

export default Auth;
