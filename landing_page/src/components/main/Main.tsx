import React from 'react';
import { IntroSection } from './introSection';
import { AboutSection } from './detailsSection/AboutSection';
import './Main.scss';

export const Main: React.FC = () => {
    return (
        <>
            <IntroSection />
            <AboutSection />
        </>
    );
};
