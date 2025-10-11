import { useParams } from 'react-router-dom';
import { useBlog } from '../Hooks/usePost';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Blog() {
    const { posts } = useBlog();
    const { slug } = useParams();
    const arr = slug.split("-");
    const heading = arr.join(" ");
    const post = posts.find(p => p.heading == heading);

    useGSAP(() => {
        let headings = SplitText.create(".heading", { type: "chars" });
        let paragraphs = SplitText.create(".paragraph", { type: "chars" });
        let footers = SplitText.create(".footer", { type: "chars" });
        const tl = gsap.timeline();
        tl.fromTo(".blogpost", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, ease: "bounce.out" })
            .fromTo(headings.chars, { opacity: 0,x:-4,y:-4 }, { opacity: 1,x:0,y:0, stagger: 0.06, ease: "power3.inOut",duration:0.6 })
            .fromTo(paragraphs.chars,{opacity:0},{opacity:1,stagger:0.05,ease:"power4.Out",duration:0.5})
            .fromTo(footers.chars,{opacity:0},{opacity:1,stagger:0.04,ease:"power3.out",duration:0.1,delay:0});
    });

    return (
        <>
            <div className="min-w-screen min-h-screen bg-linear-120 from-10% from-auth-left via-30% via-auth-right to-auth-left overflow-hidden">
                <div className="fixed top-0 left-0 max-500w:hidden w-screen min-h-fit flex justify-start">
                    <div className="bg-radial-[at_0%_0%] from-0% from-[rgba(26,181,217,0.35)] via-40% via-[rgba(12,58,69,0.15)] to-80% to-[rgba(7,20,24,0)] rounded-full p-70 blur-[50px]"></div>
                </div>
                <div className="fixed top-0 left-0 w-screen h-screen z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 to-100% scale-150 p-[12px] rounded-full blur-[50px]"></div>
                </div>
                <div className="fixed bottom-0 right-0 w-fit h-fit z-[1]">
                    <div className="bg-radial-[at_30%_50%] from-cyan-200 from-5% via-cyan-500 via-45% to-cyan-950 scale-150 p-10 rounded-full blur-[50px]"></div>
                </div>
                <div className="w-screen h-screen flex justify-center items-center">
                    <div className="blogpost bg-white1 backdrop-blur-[50px] rounded-[10px] p-[40px] max-500w:p-[27px] max-400w:p-[18px] max-330w:p-[12px] border-1 border-white/20 shadow-auth">
                        <div className="w-[550px] max-700w:w-[500px] max-600w:w-[400px] max-500w:w-[300px] max-400w:w-[250px] max-330w:w-[220px] max-400w:h-[600px] z-[20]">
                            <h1 className="heading w-full text-2xl max-500w:text-xl max-400w:text-md text-center text-white font-bold">{post.heading}</h1><br />
                            <p className="paragraph w-full text-lg max-500w:text-md max-400w:text-sm text-left text-white text-wrap">{post.content}</p><br />
                            <p className="footer w-full text-lg max-500w:text-md max-400w:text-sm text-left text-white">Written By {post.name}</p><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
