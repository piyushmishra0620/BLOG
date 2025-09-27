import { useRef } from 'react';

const Signup = () => {
    const buttonref = useRef();
    function clickHandler(e) {
        e.preventDefault();
        buttonref.current.classList.remove('text-white');
        buttonref.current.classList.add('bg-cyan-300');
        buttonref.current.classList.add('text-black');
    }
    
    return (
        <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden">
            <div className="absolute top-0 left-0 max-500w:hidden w-screen min-h-fit  flex justify-start">
                <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)]  rounded-full p-70 blur-[50px]"></div>
            </div>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="bg-white1 backdrop-blur-[40px] rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/20 shadow-auth">
                    <form className="flex flex-col w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] z-2">
                        <label htmlFor="username" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-10 pointer-events-auto">UserName : </label>
                        <input id="username" type="text" className="text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-10 pointer-events-auto" placeholder="Enter the user-name..." /><br />
                        <label htmlFor="emailid" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-10 pointer-events-auto">Email-Id : </label>
                        <input id="emailid" type="email" className="text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-10 pointer-events-auto" placeholder="Enter the email..." /><br />
                        <label htmlFor="password" className="text-white font-semibold text-[17.5px] w-fit h-fit justify-self-start mb-2 cursor-pointer z-10 pointer-events-auto">Password : </label>
                        <input id="password" type="password" className="text-white rounded-[15px] border-1 border-white/20 shadow-button p-[10px] w-full z-10 pointer-events-auto" placeholder="Enter the password..." /><br />
                        <button ref={buttonref} className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] mt-10 border-1 border-white/20 cursor-pointer shadow-button hover:bg-cyan-300 hover:text-black hover:font-semibold hover:text-1xl hover:font-sans hover:-translate-y-1 hover:shadow-cyan-400 hover:shadow-sm active:animate-click active:bg-cyan-300 duration-200 ease-in-out z-10 pointer-events-auto" onClick={clickHandler}>SignUp</button>
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
