import React from 'react';
import * as constants from '../../../utlis/constants';
import './IntroSection.scss';

const IntroText: React.FC = () => {
    return (
        <div className="intro__container--text">
            <p className="text--hello">{constants.TEXT_HELLO}</p>
            <p className="text--introduction">{constants.TEXT_INTRODUCTION}</p>
        </div>
    );
};
const Photo: React.FC = () => {
    return (
        <div className="intro__container--photo">
            <div className="container--photo"></div>
        </div>
    );
};

export const IntroSection: React.FC = () => {
    return (
        <section className="intro__container" data-testid="intro">
            <IntroText />
            <Photo />
        </section>
    );
};
