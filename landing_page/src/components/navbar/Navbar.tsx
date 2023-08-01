import React from 'react';
import * as constants from '../../utlis/constants';
import './Navbar.scss';

const Menu: React.FC = () => {
    return (
        <ul className="menu__list">
            <li>{constants.HOME}</li>
            <li>{constants.PORTFOLIO}</li>
            <li>{constants.CODEWARS}</li>
            <li>{constants.CONTACT}</li>
        </ul>
    );
};

const ContactIcons: React.FC = () => {
    return <div></div>;
};

const Name: React.FC = () => {
    return (
        <div>
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
