import React from 'react';
import { IntroSection } from './introSection';
import { DetailsSection } from './detailsSection/DetailsSection';
import './Main.scss';

export const Main: React.FC = () => {
    return (
        <>
            <IntroSection />
            <DetailsSection />
        </>
    );
};
