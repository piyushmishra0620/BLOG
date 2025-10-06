import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Button = (props) => {
    const navigate = useNavigate();
    const buttonRef = useRef();

    useGSAP(() => {
        gsap.fromTo(".buttons", { opacity: 0, y:200 }, { opacity: 1, y: 0, stagger: 0.1, ease: "power3.inOut" });
        buttonRef.current.classList.remove("opacity-0");
    });

    function handleButtonClick() {
        buttonRef.current.classList.remove('text-white');
        buttonRef.current.classList.add('bg-cyan-300');
        buttonRef.current.classList.add('text-black');
        setTimeout(() => {
            navigate(props.path);
        }, 200);
    }
    return (
        <>
            <button ref={buttonRef} className="buttons opacity-0 mb-2 mt-2 text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-[130]" onClick={handleButtonClick}>{props.work}</button>
        </>
    )
}