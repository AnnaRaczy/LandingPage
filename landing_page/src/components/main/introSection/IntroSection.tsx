import React from 'react';
import * as constants from '../../../utlis/constants';
import * as enums from '../../../utlis/enums';
import './IntroSection.scss';

const IntroText: React.FC = () => {
    return (
        <div className="intro__container--text">
            <h2 className="">{constants.TEXT_HELLO}</h2>
            <p className="text--hello">{constants.TEXT_HELLO}</p>
            <h4 className="text--title">{constants.TEXT_DEVELOPER}</h4>
            <p className="text--introduction">{constants.TEXT_INTRODUCTION}</p>
        </div>
    );
};
const Photo: React.FC = () => {
    return (
        <div className="intro__container--photo">
            <img
                alt="portrait"
                src="landing_page/public/images/profilePhoto.jpeg"
            />
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
