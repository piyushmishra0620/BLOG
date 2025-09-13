const Auth = () => {
    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-150 from-auth-left to-auth-right flex justify-center items-center">
                <div className="bg-white/1 backdrop-blur-2xl rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/5 shadow-auth ">
                    <div className="flex flex-col items-center-safe h-fit justify-between gap-2 w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] mb-10">
                        <button className="text-white text-1xl font-sans font-semibold py-4 w-full  rounded-[15px] border-1 border-white/5 cursor-pointer">Sign Up</button>
                        <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/5 cursor-pointer">Login</button>
                    </div>
                    <div className="flex justify-center items-center-safe w-full mb-10">
                        <span className="bg-white  w-full h-[0.2px] p-[0.2px] me-1.5"></span>
                        <span className="text-white text-1xl font-semibold">OR</span>
                        <span className="bg-white w-full p-[0.2px] h-[0.2px] ms-1.5"></span>
                    </div>
                    <div className="flex flex-col justify-between items-center-safe w-full h-fit gap-2 ">
                        <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/5 cursor-pointer">Continue With Google</button>
                        <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/5 cursor-pointer">Continue With GitHub</button>
                        <button className="text-white text-1xl font-sans font-semibold py-4 w-full rounded-[15px] border-1 border-white/5 cursor-pointer">Continue With Apple</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;