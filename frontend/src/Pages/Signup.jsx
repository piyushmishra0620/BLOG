import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../Schemas/signupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {motion,AnimatePresence} from 'framer-motion';

const Signup = () => {
    const [namecorrect, setnamecorrect] = useState(false);
    const [emailcorrect, setemailcorrect] = useState(false);
    const [passwordcorrect, setpasswordcorrect] = useState(false);
    const [emailerror, setemailerror] = useState(false);
    const [passworderror, setpassworderror] = useState(false);
    const [namerror, setnamerror] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupSchema), mode: "all" });
    const navigate = useNavigate();
    const input1ref = useRef();
    const input2ref = useRef();
    const input3ref = useRef();
    const formref = useRef();
    const buttonref = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo(formref.current, { scale: 0 }, { scale: 1, ease: "bounce.out", duration: 0.5 });
    });
    function nameinputChange() {
        if (errors.name) {
            setnamecorrect(false);
        } else {
            setnamecorrect(true);
        }
    }

    function emailinputChange() {
        if (errors.email) {
            setemailcorrect(false);
        } else {
            setemailcorrect(true);
        }
    }

    function passwordinputChange() {
        if (errors.password) {
            setpasswordcorrect(false);
        } else {
            setpasswordcorrect(true);
        }
    }

    function liveValidation() {
        if (errors.name) {
            setnamerror(true);
        } else {
            setnamerror(false);
        }
        if (errors.email) {
            setemailerror(true);
        } else {
            setemailerror(false);
        }
        if (errors.password) {
            setpassworderror(true);
        } else {
            setpassworderror(false);
        }
    }

    function clickHandler(e) {
        e.preventDefault();
        setnamerror(false);
        setemailerror(false);
        setpassworderror(false);
        buttonref.current.classList.remove('text-white');
        buttonref.current.classList.add('bg-cyan-300');
        buttonref.current.classList.add('text-black');
        navigate("/Home");
    }
    function handleErrors(errors) {
        if (errors.name) {
            setnamerror(true);
        } else {
            setnamerror(false);
        }

        if (errors.email) {
            setemailerror(true);
        } else {
            setemailerror(false);
        }

        if (errors.password) {
            setpassworderror(true);
        } else {
            setpassworderror(false);
        }
    }
    return (
        <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden">
            <div className="absolute top-0 left-0 max-500w:hidden w-screen min-h-fit  flex justify-start">
                <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)]  rounded-full p-70 blur-[50px]"></div>
            </div>
            <div className="w-screen h-screen flex justify-center items-center">
                <div ref={formref} className="bg-white1 backdrop-blur-[40px] rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/20 shadow-auth">
                    <form className="flex flex-col w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] z-2" onSubmit={handleSubmit(clickHandler,handleErrors)}>
                        <label htmlFor="username" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-10 pointer-events-auto">UserName : </label>
                        <input ref={input1ref} {...register("name")} id="username" type="text" className={(errors.name) ? "text-white rounded-[15px] border-1 shadow-button p-[10px] w-full z-10 pointer-events-auto border-red-600 outline-none" : (namecorrect) ? "text-white rounded-[15px] border-1 shadow-button p-[10px] w-full z-10 pointer-events-auto border-green-400 outline-none" : "text-white rounded-[15px] border-1 shadow-button p-[10px] w-full z-10 pointer-events-auto border-white/20 outline-none"} placeholder="Enter the user-name..." onBlur={liveValidation} onInput={nameinputChange} />
                        {errors.name && namerror && (<AnimatePresence><motion.p initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{type:"spring",stiffness:150,duration:0.02,velocity:80}} className="text-red-700 font-bold mt-2">{errors.name.message}</motion.p></AnimatePresence>)}
                        <br />
                        <label htmlFor="emailid" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-10 pointer-events-auto">Email-Id : </label>
                        <input ref={input2ref} {...register("email")} id="emailid" type="email" className={(errors.email) ? "text-white rounded-[15px] border-1 border-red-600 shadow-button p-[10px] w-full z-10 pointer-events-auto outline-none" : (emailcorrect) ? "text-white rounded-[15px] border-1 border-green-400 shadow-button p-[10px] w-full z-10 pointer-events-auto outline-none" : "text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-10 pointer-events-auto outline-none"} placeholder="Enter the email..." onBlur={liveValidation} onInput={emailinputChange} />
                        {errors.email && emailerror && (<AnimatePresence><motion.p initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} className="text-red-700 font-bold mt-2">{errors.email.message}</motion.p></AnimatePresence>)}
                        <br />
                        <label htmlFor="password" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-10 pointer-events-auto">Password : </label>
                        <input ref={input3ref} {...register("password")} id="password" type="password" className={(errors.password) ? "text-white rounded-[15px] border-1 border-red-600 shadow-button p-[10px] w-full z-10 pointer-events-auto outline-none" : (passwordcorrect) ? "text-white rounded-[15px] border-1 border-green-400 shadow-button p-[10px] w-full z-10 pointer-events-auto outline-none" : "text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-10 pointer-events-auto outline-none"} placeholder="Enter the password..." onBlur={liveValidation} onInput={passwordinputChange} />
                        {errors.password && passworderror && (<AnimatePresence><motion.p initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} className="text-red-700 font-bold mt-2">{errors.password.message}</motion.p></AnimatePresence>)}
                        <br />
                        <button ref={buttonref} type="submit" className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] mt-10 border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-10 pointer-events-auto">SignUp</button>
                    </form>
                    <div className="absolute top-0 flex w-full h-fit justify-end">
                        <div className="bg-radial-[at_20%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-175 p-12 rounded-full blur-[50px] 500w:p-10"></div>
                    </div>
                    <div className="absolute -bottom-8 flex justify-center w-full h-fit">
                        <div className="bg-radial-[at_50%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-175 500w:scale-150 p-12 500w:p-10 rounded-full blur-[50px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
