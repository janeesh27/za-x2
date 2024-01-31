import React from 'react'
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import AudioComponent from './components/AudioComponent'

const App = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3","#title-4","#music"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3","#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(["#welcome","#inputbox"], {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary-bg absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <AudioComponent id="music" />
        <h1 className="text-5xl text-[#9D94FE]" id="title-1">
          Project
        </h1>
        <h1 className="text-5xl text-[#9D94FE]" id="title-2">
          SushantLok
        </h1>
        <h1 className="text-5xl text-[#9D94FE]" id="title-3">
          is
        </h1>
        <h1 className="text-5xl text-[#9D94FE]" id="title-4">
          Back!
        </h1>
      </div>
      <div className="h-screen flex gap-y-12 bg-primary-bg flex-col mt-[20vh]">
        <h1
          id="welcome"
          className="text-5xl text-[#9D94FE] font-bold w-fit mx-auto font-spaceGrotesk"
        >
          Welcome
        </h1>
    
        

        <div className='w-fit mx-auto' id="inputbox">
          <form className='flex flex-col gap-y-8'>
         <input placeholder="Digits: Bring Cake" type='number' className='border-[#9D94FE] font-spaceGrotesk placeholder:font-spaceGrotesk border-[2px] text-2xl text-[#9d94fe] placeholder:text-[#9d94fe] text-center p-2 w-[320px] rounded-sm h-[50px] bg-[#0F110F]'></input>
         <button className='bg-[#9d94fe] font-spaceGrotesk p-2 w-[320px] text-[20px] h-[50px] rounded-md'>Authorize Your Presence</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default App