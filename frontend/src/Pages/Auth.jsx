import {useRef} from 'react';
import {motion,AnimatePresence} from 'framer-motion';

const Auth = () => {
    const button1Ref = useRef();
    const button2Ref = useRef();

    function handleButton1Click(){
        button1Ref.current.classList.remove('text-white');
        button1Ref.current.classList.add('bg-cyan-300');
        button1Ref.current.classList.add('text-black');
    }

    function handleButton2Click(){
        button2Ref.current.classList.remove('text-white');
        button2Ref.current.classList.add('bg-cyan-300');
        button2Ref.current.classList.add('text-black');
    }

    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left ">
                <div className="pt-10">
                    <h1 className="text-center bg-linear-120 from-0% from-gradient1 via-30% via-gradient3 to-80% to-gradient2 bg-clip-text text-transparent text-[40px] max-500w:text-[35px] max-400w:text-[30px] font-bold">Welcome To BLOGIFY</h1>
                    <p className="text-center text-p1 text-[18px] max-500w:text-[16px] max-400w:text-[12px] font-semibold hyphens-manual">Continue With BLOGIFY to enjoy premium BLOG content.</p>
                </div>
                <div className="mt-20 flex justify-center items-center min-w-screen min-h-60">
                    <div className="bg-white1 backdrop-blur-[40px] rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/20 shadow-auth ">
                        <div className="flex flex-col items-center-safe h-fit justify-between gap-2 w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] mb-10 max-400w:mb-7">
                            <button ref={button1Ref} className="text-white text-1xl font-sans font-semibold py-4 w-full  rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out" onClick={handleButton1Click}>Sign Up</button>
                            <button ref={button2Ref} className="text-white text-1xl font-sans font-semibold py-4 w-full  rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out" onClick={handleButton2Click}>Login</button>
                        </div>
                        <div className="flex justify-center items-center-safe w-full mb-10 max-400w:mb-7">
                            <span className="bg-white  w-full h-[0.2px] p-[0.2px] me-1.5"></span>
                            <span className="text-white text-1xl font-semibold">OR</span>
                            <span className="bg-white w-full p-[0.2px] h-[0.2px] ms-1.5"></span>
                        </div>
                        <div className="flex flex-col justify-between items-center-safe w-full h-fit gap-2 ">
                            <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button">Continue With Google</button>
                            <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button">Continue With GitHub</button>
                            <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button">Continue With Apple</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;
