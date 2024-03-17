import React, { useRef } from 'react';

const AudioComponent = () => {
    return (
        <div>
            <audio src="./mainAudio.m4a" autoPlay preload="auto" />
        </div>
    );
};

export default AudioComponent;
