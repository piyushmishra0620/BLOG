import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

const landing = () => {
    const button1Ref = useRef();
    const button2Ref = useRef();
    const navigate = useNavigate();

    function handlebutton1click() {
        button1Ref.current.classList.remove('text-white');
        button1Ref.current.classList.add('bg-cyan-300');
        button1Ref.current.classList.add('text-black');
        setTimeout(()=>{
            navigate('/posts');
        },200);
    }

    function handlebutton2click() {
        button2Ref.current.classList.remove('text-white');
        button2Ref.current.classList.add('bg-cyan-300');
        button2Ref.current.classList.add('text-black');
        setTimeout(()=>{
            navigate('/form');
        },200);
    }

    useEffect(() => {
        gsap.fromTo(".buttons", { opacity: 0, x: "-70%" }, { opacity: 1, x: 0, stagger: 0.2, ease: "bounce.inOut" });
        button1Ref.current.classList.remove("opacity-0");
        button2Ref.current.classList.remove("opacity-0");
    }, []);

    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden z-5">
                <div className="absolute nl-35 top-0 left-0 flex w-fit h-fit justify-center z-10">
                    <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)] rounded-full p-100 blur-[50px]"></div>
                </div>
                <div className="w-screen h-screen flex  justify-center items-center">
                    <div className="flex w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] h-fit flex-col">
                        <button ref={button1Ref} className="buttons opacity-0 mb-2 text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-130" onClick={handlebutton1click} >See Blog Posts</button>
                        <button ref={button2Ref} className="buttons opacity-0 mt-2 text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-130" onClick={handlebutton2click} >Create Blog Post</button>
                        <div className="absolute flex w-full h-fit justify-end bottom-8 ">
                             <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)] rounded-full p-100 blur-[50px]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default landing;
