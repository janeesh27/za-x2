import React from 'react';

const PlayAudioBtn = ({ setPlayAudio }) => {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center overflow-hidden">
            <button
                className="p-3 border-[1px] border-[#fff]"
                onClick={() => {
                    setPlayAudio(true);
                }}>
                Allow audio access
            </button>
        </div>
    );
};

export default PlayAudioBtn;
