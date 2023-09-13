import React, { useState } from 'react';
import * as constants from '../../../utlis/constants';
import './AboutSection.scss';

const Skills: React.FC = () => {
    return (
        <p className="text--section">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            voluptatem ipsum magni. Quas, laboriosam quia laudantium impedit
            omnis eaque autem facere maiores asperiores natus et iste cupiditate
            dolorem neque, perferendis facilis culpa a explicabo. Minima
            veritatis similique ad cumque sunt quidem ipsa mollitia accusamus,
            minus facilis? Cum est necessitatibus aliquam provident vero illum
            assumenda illo deserunt non. Praesentium, ea. Vero, eius sit. Fuga
            aut culpa magni aspernatur non odio, aperiam vero repellendus ipsum
            excepturi vel consectetur quibusdam repellat unde tenetur hic dolore
            esse ipsa? Maiores repellat cumque labore fugit deserunt sed natus.
        </p>
    );
};
const History: React.FC = () => {
    return <p className="text--section">History</p>;
};
const Languages: React.FC = () => {
    return <p className="text--section">Languages</p>;
};
const Education: React.FC = () => {
    return <p className="text--section">Education</p>;
};
const Hobbies: React.FC = () => {
    return <p className="text--section">Hobbies</p>;
};

const AboutList: React.FC = () => {
    const [active, setActive] = useState<undefined | number>();

    const listElements = {
        SKILLS: constants.SKILLS,
        WORK_HISTORY: constants.WORK_HISTORY,
        LANGUAGES: constants.LANGUAGES,
        EDUCATION: constants.EDUCATION,
        HOBBIES: constants.HOBBIES,
    };

    const handleClick = (i: number) => setActive(i);

    let component;
    switch (active) {
        case 1:
            component = <History />;
            break;
        case 2:
            component = <Languages />;
            break;
        case 3:
            component = <Education />;
            break;
        case 4:
            component = <Hobbies />;
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
                        className="menu__list--item"
                        onClick={() => handleClick(i)}
                    >
                        <li key={i}>{listElement}</li>
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
