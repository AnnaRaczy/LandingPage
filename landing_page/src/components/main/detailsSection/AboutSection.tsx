import React, { useState } from 'react';
import * as constants from '../../../utlis/constants';
import { clsx } from 'clsx';
import './AboutSection.scss';

type PropsExperience = {
    job_title: string;
    company: string;
    years: string;
    description: string[];
};

const Position: React.FC<PropsExperience> = ({
    job_title,
    company,
    years,
    description,
}) => {
    return (
        <div className={`text__section--item company--${company}`}>
            <div className="position__info">
                <p className="job--title">{`${job_title} | ${company}`}</p>
                <p className="job--years">{years}</p>
            </div>
            <p className="experience--list">
                {description.map((elem, i) => (
                    <li key={i}>{elem}</li>
                ))}
            </p>
        </div>
    );
};
const positionsData = ['CS', 'MAS'];

const OtherPositions: React.FC = () => {
    return (
        <>
            {positionsData.map((company) => (
                <p>
                    <span className="positions--older">
                        {`constants.JOB_TITLE_${company}`} |{' '}
                        {`constants.${company}`}
                    </span>
                    {`constants.YEARS_${company}`}
                </p>
            ))}
            {/* <p>
                <span className="positions--older">
                    {constants.JOB_TITLE_CS} | {constants.CS}
                </span>
                {constants.YEARS_CS}
            </p>
            <p>
                <span className="positions--older">
                    {constants.JOB_TITLE_MAS} | {constants.MAS}
                </span>
                {constants.YEARS_MAS}
            </p> */}
        </>
    );
};

const Experience: React.FC = () => {
    return (
        <>
            <div className="text__section">
                <Position
                    job_title={constants.JOB_TITLE_CAP}
                    company={constants.CAP}
                    years={constants.YEARS_CAP}
                    description={constants.JOB_DESC_CAP}
                />
                <Position
                    job_title={constants.JOB_TITLE_AXA}
                    company={constants.AXA}
                    years={constants.YEARS_AXA}
                    description={constants.JOB_DESC_AXA}
                />
            </div>
            <OtherPositions />
        </>
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
        Skills: constants.SKILLS,
        Experience: constants.EXPERIENCE,
        Education: constants.EDUCATION,
    };

    const handleClick = (i: number) => setActive(i);

    let component;
    switch (active) {
        case 1:
            component = <Experience />;
            break;
        case 2:
            component = <Education />;
            break;
        default:
            component = <Skills />;
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
