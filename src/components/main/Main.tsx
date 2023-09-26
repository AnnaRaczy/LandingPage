import React from 'react';
import { IntroSection } from './introSection';
import { AboutSection } from './detailsSection/AboutSection';
import { PortfolioSection } from './portfolioSection/PortfolioSection';

export const Main: React.FC = () => {
    return (
        <>
            <IntroSection />
            <AboutSection />
            <PortfolioSection />
        </>
    );
};
