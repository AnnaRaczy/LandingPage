import React from 'react';
import * as constants from '../../../utils/constants';
import './PortfolioSection.scss';

const projectsData = [
    {
        link: constants.LINK_DONATE,
        title: constants.DONATE_YOUR_THINGS,
    },
    {
        link: constants.LINK_DEMO,
        title: constants.DONATE_DEMO,
    },
];

const Projects: React.FC = () => {
    return (
        <div className="portfolio__container--projects">
            <div className="container--photo"></div>
            <ul>
                {projectsData.map((value) => (
                    <li className="list--item">
                        <a
                            className="list--link"
                            href={value.link}
                            target={constants.BLANK}
                            rel={constants.REL}
                        >
                            {value.title}
                        </a>
                    </li>
                ))}
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
