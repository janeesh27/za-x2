import { useState } from 'react';
import HeroSlideInAnimation from './components/HeroSlideInAnimation';
import Header from './components/Header';
import IntroAnimation from './components/IntroAnimation';

const App = () => {
    const [introAnimation, setIntroAnimation] = useState(false);

    return (
        <>
            {!introAnimation ? <IntroAnimation setIntroAnimation={setIntroAnimation} /> : null}
            {introAnimation ? (
                <>
                    <Header />
                    <HeroSlideInAnimation />
                </>
            ) : null}
        </>
    );
};

export default App;
