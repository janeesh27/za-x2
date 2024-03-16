import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const HeroSlideInAnimation = () => {
    const [playVideo, setPlayVideo] = useState(false);
    useGSAP(() => {
        let tl = gsap.timeline();

        tl.fromTo(
            '#mainImg',
            {
                x: -500,
                rotation: -360,
            },
            {
                x: '-50%',
                left: '50%',
                rotation: 0,
                duration: 6,
                onComplete: () => setPlayVideo(true),
            }
        ).to(
            '#videoContainer',
            {
                opacity: 1,
            },
            '+0.5'
        );
    }, []); //

    return (
        <div className="h-[100vh] w-[100vw] relative">
            <div className="h-full w-full absolute inset-0 opacity-0" id="videoContainer">
                {playVideo ? <video loop={false} preload autoPlay muted src="./video.mov" /> : null}
            </div>
            <div
                className="h-[250px] w-[280px] md:h-[400px] md:w-[500px] z-10 absolute top-[50%] translate-y-[-50%]"
                id="mainImg">
                <img src="./mainImg.png" />
                <img src="./icon.png" className="mx-auto h-[35px] w-[110px] !mt-3" />
            </div>
        </div>
    );
};

export default HeroSlideInAnimation;
