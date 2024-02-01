import { useState, useRef } from 'react';

const AudioComponent = () => {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <audio autoPlay ref={audioRef} src="/themeSong.mp3" />
            <button
                style={{ padding: '5px 10px', position: 'absolute',borderRadius: '5px', top: '10px', right: '20px',fontFamily:"Space Grotesk",color:"#0F110F", background:"#9D94FE" }}
                onClick={handleTogglePlayPause}>
          <div className='flex justify-normal gap-x-2 items-center'>      
    {isPlaying ? 'PAUSE' : 'PLAY'}<img src="./music.png" className='h-[15px] w-[15px]' /></div>
            </button>
        </>
    );
};

export default AudioComponent;