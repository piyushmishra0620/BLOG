import {Button} from '../Components/buttonHome';

const landing = () => {

    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden z-5">
                <div className="absolute nl-35 top-0 left-0 flex w-fit h-fit justify-center z-10">
                    <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)] rounded-full p-100 blur-[50px]"></div>
                </div>
                <div className="w-screen h-screen flex  justify-center items-center">
                    <div className="flex w-[470px] max-700w:w-[430px] max-600w:w-[370px] max-500w:w-[335px] max-400w:w-[280px] max-330w:w-[220px] h-fit flex-col">
                        <Button path="/posts" work="See Blog Posts"/>
                        <Button path="/form" work="Create Blog Post" />
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
