import { useState } from 'react';
import HeroSlideInAnimation from './components/HeroSlideInAnimation';
import Header from './components/Header';
import IntroAnimation from './components/IntroAnimation';
import AudioComponent from './components/AudioComponent';
import PlayAudioBtn from './components/PlayAudioBtn';

const App = () => {
    const [playAudio, setPlayAudio] = useState(false);
    const [introAnimation, setIntroAnimation] = useState(false);

    return (
        <>
            {!playAudio ? <PlayAudioBtn setPlayAudio={setPlayAudio} /> : null}
            {playAudio ? (
                <>
                    <AudioComponent />
                    {!introAnimation ? <IntroAnimation setIntroAnimation={setIntroAnimation} /> : null}
                    {introAnimation ? (
                        <>
                            <Header />
                            <HeroSlideInAnimation />
                        </>
                    ) : null}
                </>
            ) : null}
        </>
    );
};

export default App;
