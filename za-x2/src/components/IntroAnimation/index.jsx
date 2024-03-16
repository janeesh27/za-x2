import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const IntroAnimation = ({ setIntroAnimation }) => {
    useGSAP(() => {
        const t1 = gsap.timeline({ defaults: { duration: 1.5 } });

        t1.from('#title-1', {
            opacity: 0,
            y: '50',
        })
            .to('#title-1', {
                opacity: 0,
                y: '-50',
                delay: 0.5, // Delay before animating the next title
            })
            .from('#title-2', {
                opacity: 0,
                y: '50',
            })
            .to('#title-2', {
                opacity: 0,
                y: '-50',

                delay: 0.5, // Delay before animating the next title
            })
            .from('#title-3', {
                opacity: 0,
                y: '50',
            })
            .to('#title-3', {
                opacity: 0,
                y: '-50',
                delay: 0.5, // Delay before animating the next title
            })
            .from('#title-4', {
                opacity: 0,
                y: '50',
            })
            .to('#title-4', {
                opacity: 0,
                y: '-50',
                delay: 0.5, // Delay before animating the next title
            })
            .from('#title-5', {
                opacity: 0,
                y: '50',
            })
            .to('#title-5', {
                opacity: 0,
                y: '-50',

                delay: 0.5, // Delay before animating the next title
            })
            .from('#title-6', {
                opacity: 0,
                y: '50',
            })
            .to('#title-6', {
                opacity: 0,
                y: '-50',
                delay: 0.5, // Delay before animating the next title
                onComplete: () => setIntroAnimation(true),
            });
    });

    return (
        <div className="relative h-[100vh] w-[100vw] font-bold p-10 flex flex-col justify-center text-center text-[24px] introContainer uppercase">
            <span id="title-1">There was an idea</span>
            <span id="title-2">to bring together</span>
            <span id="title-3">a group of remarkable people</span>
            <span id="title-4">so when we needed them</span>
            <span id="title-5">They could plan trips for us</span>
            <span id="title-6">that we never could</span>
        </div>
    );
};

export default IntroAnimation;
