import React, { useState } from 'react';
import * as constants from '../../../utils/constants';
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
                <p className="title">{`${job_title} | ${company}`}</p>
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

const OtherPositions: React.FC = () => {
    return (
        <p>
            <a
                className="positions--older title"
                href={constants.LINK_CODERSCREW}
                target={constants.BLANK}
                rel={constants.REL}
            >
                {constants.CODERSCREW}
            </a>
            {constants.YEARS_CODERSCREW}
        </p>
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

const SoftSkills: React.FC = () => {
    return (
        <div className="text__section--item">
            <p className="title">{constants.INTERPERSONAL_SKILLS}</p>
            {constants.SOFT_SKILLS.map((skill, i) => (
                <li key={i} className="skills--item">
                    {skill}
                </li>
            ))}
        </div>
    );
};

const skillsData = [
    {
        level: constants.COMPETENT,
        skills: constants.COMPETENT_SKILLS,
    },
    {
        level: constants.INTERMEDIATE,
        skills: constants.INTERMEDIATE_SKILLS,
    },
];

const TechnicalSkills: React.FC = () => {
    return (
        <div className="text__section--item">
            <p className="title">{constants.TECHINCAL_SKILLS}</p>
            {skillsData.map((value, i) => (
                <li className="skills--item">
                    <span key={i} className="skills">
                        {value.level}
                    </span>
                    {value.skills}
                </li>
            ))}
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <div className="text__section">
            <TechnicalSkills />
            <SoftSkills />
        </div>
    );
};

const EducationCourse: React.FC = () => {
    return (
        <li>
            <span className="education--title">{constants.JS_COURSE}</span>
            <a
                className="certificate--link "
                href={constants.LINK_CERTIFICATE}
                target={constants.BLANK}
                rel={constants.REL}
            >
                {constants.CERTIFICATE}
            </a>
            <span className="year">{constants.CERTIFICATE_YEAR}</span>
        </li>
    );
};

const educationData = [
    {
        title: constants.MASTER,
        faculty: constants.FACULTY,
        year: constants.MASTER_YEAR,
    },
    {
        title: constants.BACHELOR,
        faculty: constants.FACULTY,
        year: constants.BACHELOR_YEAR,
    },
];

const Education: React.FC = () => {
    return (
        <div className="text__section">
            <ul className="text__section--education">
                <EducationCourse />
                {educationData.map((value, i) => (
                    <li key={i}>
                        <span className="education--title">{value.title}</span>{' '}
                        {value.faculty}
                        <span className="year">{value.year}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
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
        <section className="about__container" id="about">
            <Title />
            <AboutList />
        </section>
    );
};
