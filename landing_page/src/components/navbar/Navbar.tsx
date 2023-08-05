import React, { useState, MouseEvent } from 'react';
import * as constants from '../../utlis/constants';
import * as enums from '../../utlis/enums';
import { Icon } from '../common/icon';
import './Navbar.scss';

const Menu: React.FC = () => {
    const listElements = [
        constants.HOME,
        constants.ABOUT,
        constants.PORTFOLIO,
        constants.CODEWARS,
    ];
    return (
        <ul className="menu__list">
            {listElements.map((listElement, i) => (
                <li key={i} className="menu__list--item">
                    {listElement}
                </li>
            ))}
        </ul>
    );
};

const ContactIcons: React.FC = () => {
    const [active, setActive] = useState('');

    const style = {
        padding: '0 10px 0 10px',
        width: '20px',
        height: '20px',
    };

    const handleMouseOver = (event: MouseEvent<HTMLImageElement>) => {
        if (event) {
            setActive(event.currentTarget.alt);
        }
    };

    const handleMouseOut = (event: MouseEvent<HTMLImageElement>) => {
        if (event) {
            setActive('');
        }
    };

    const icons = {
        GITHUB:
            active !== enums.IconsNormal.GITHUB
                ? enums.IconsNormal.GITHUB
                : enums.IconsHover.GITHUB,
        LINKEDIN:
            active !== enums.IconsNormal.LINKEDIN
                ? enums.IconsNormal.LINKEDIN
                : enums.IconsHover.GITHUB,
        EMAIL:
            active !== enums.IconsNormal.EMAIL
                ? enums.IconsNormal.EMAIL
                : enums.IconsHover.GITHUB,
    };

    return (
        <div className="header__icons">
            {(Object.keys(icons) as (keyof typeof icons)[]).map((icon, i) => (
                <a key={i} href={enums.Address[icon]} target={constants.BLANK}>
                    <Icon
                        name={icons[icon]}
                        iconStyle={style}
                        handleMouseOver={(
                            event: MouseEvent<HTMLImageElement>,
                        ) => handleMouseOver(event)}
                        handleMouseOut={(event: MouseEvent<HTMLImageElement>) =>
                            handleMouseOut(event)
                        }
                    />
                </a>
            ))}
        </div>
    );
};
const Name: React.FC = () => {
    return (
        <div className="header__name">
            {constants.NAME}
            {constants.LAST_NAME}
        </div>
    );
};

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar__container" data-testid="navbar">
            <div className="navbar__container--info">
                <Name />
                <ContactIcons />
            </div>
            <div className="navbar__container--menu">
                <Menu />
            </div>
        </nav>
    );
};
