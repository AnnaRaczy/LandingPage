import React from 'react';
import * as constants from '../../../utlis/constants';
import './PortfolioSection.scss';

const Projects: React.FC = () => {
    return (
        <ul className="portfolio__container--projects">
            <li className="list--item">
                <a className="list--link" href="/">
                    {constants.DONATE_YOUR_THINGS}
                </a>
            </li>
            <li className="list--item">
                <a className="list--link" href="/">
                    {constants.DONATE_DEMO}
                </a>
            </li>
            <li className="list--item">
                <a className="list--link" href="/">
                    {constants.CODERS_CREW}
                </a>
            </li>
        </ul>
    );
};

const Title: React.FC = () => {
    return (
        <div className="portfolio__container--title">{constants.PORTFOLIO}</div>
    );
};

export const PortfolioSection: React.FC = () => {
    return (
        <div className="portfolio__container">
            <Title />
            <Projects />
        </div>
    );
};
