import React from 'react';
import * as constants from '../../../utlis/constants';
import './PortfolioSection.scss';

const Projects: React.FC = () => {
    return (
        <div className="portfolio__container--projects">
            <div className="container--photo"></div>
            <ul className="">
                <li className="list--item">
                    <a
                        className="list--link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://annaraczy.github.io/DonateYourThings/#/"
                    >
                        {constants.DONATE_YOUR_THINGS}
                    </a>
                </li>
                <li className="list--item">
                    <a className="list--link " href="/">
                        {constants.DONATE_DEMO}
                    </a>
                </li>
                <li className="list--item">
                    <p>{constants.CODERS_CREW}</p>
                </li>
            </ul>
        </div>
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
