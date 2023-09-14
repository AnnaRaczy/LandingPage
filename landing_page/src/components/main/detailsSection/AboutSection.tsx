import React, { useState } from 'react';
import * as constants from '../../../utlis/constants';
import { clsx } from 'clsx';
import './AboutSection.scss';

const Experience: React.FC = () => {
    return (
        <div className="text__section">
            <div className="text__section--item">
                <p className="job--title">{`${constants.JOB_TITLE_CAP} | ${constants.CAP}`}</p>
                <p className="experience--list">
                    {constants.JOB_DESC_CAP.map((elem, i) => (
                        <li key={i}>{elem}</li>
                    ))}
                </p>
            </div>
            <div className="text__section--item">
                <p className="job--title">{`${constants.JOB_TITLE_AXA} | ${constants.AXA}`}</p>
                <p className="experience--list">
                    {constants.JOB_DESC_AXA.map((elem, i) => (
                        <li key={i}>{elem}</li>
                    ))}
                </p>
            </div>
        </div>
    );
};
const Skills: React.FC = () => {
    return <p className="text--section">Skills</p>;
};
const Education: React.FC = () => {
    return <p className="text--section">Education</p>;
};

const AboutList: React.FC = () => {
    const [active, setActive] = useState<undefined | number>(0);

    const listElements = {
        Experience: constants.EXPERIENCE,
        Skills: constants.SKILLS,
        Education: constants.EDUCATION,
    };

    const handleClick = (i: number) => setActive(i);

    let component;
    switch (active) {
        case 1:
            component = <Skills />;
            break;
        case 2:
            component = <Education />;
            break;
        default:
            component = <Experience />;
    }

    return (
        <div className="about__container--menu">
            <ul className="content--menu">
                {(
                    Object.keys(listElements) as (keyof typeof listElements)[]
                ).map((listElement, i) => (
                    <button
                        key={i}
                        className={clsx('list--item', {
                            active: active === i,
                        })}
                        onClick={() => handleClick(i)}
                    >
                        <li key={i} className={`list--item${i}`}>
                            {listElement}
                        </li>
                    </button>
                ))}
            </ul>
            <div className="content--text">{component}</div>
        </div>
    );
};

const Title: React.FC = () => {
    return <p className="about__container--title">{constants.ABOUT_ME}</p>;
};

export const AboutSection: React.FC = () => {
    return (
        <section className="about__container" data-testid="about">
            <Title />
            <AboutList />
        </section>
    );
};
