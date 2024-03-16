import React from "react";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

const defaultToasterState = {
  type: "",
  message: "",
};

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#title-1", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-1", {
          opacity: 0,
          y: "-=30",
          duration: 0.5,
          delay: 0.5, // Delay before animating the next title
        })
        .from("#title-2", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-2", {
          opacity: 0,
          y: "-=30",
          duration: 0.5,
          delay: 0.5, // Delay before animating the next title
        })
        .from("#title-3", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-3", {
          opacity: 0,
          y: "-=30",
          duration: 0.5,
          delay: 0.5, // Delay before animating the next title
        })
        .from("#title-4", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-4", {
          opacity: 0,
          y: "-=30",
          duration: 0.5,
          delay: 0.5, // Delay before animating other elements
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(["#welcome"], {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary-bg absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-5xl text-[white]" id="title-1">
          Project
        </h1>
        <h1 className="text-5xl text-[white]" id="title-2">
          Sushant Lok
        </h1>
        <h1 className="text-5xl text-[white]" id="title-3">
          is
        </h1>
        <h1 className="text-5xl text-[white]" id="title-4">
          Back!
        </h1>
      </div>

      <div className="h-screen flex gap-y-12 bg-primary-bg flex-col">
        <h1
          id="welcome"
          className="text-5xl text-[#9D94FE]  mt-[100px] font-bold w-fit mx-auto"
        >
          Welcome
        </h1>
      </div>
    </div>
  );
};

export default App;
