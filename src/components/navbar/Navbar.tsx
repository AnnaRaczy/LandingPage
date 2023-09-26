import React, { useState, MouseEvent } from 'react';
import * as constants from '../../utils/constants';
import * as enums from '../../utils/enums';
import { Icon } from '../common/icon';
import { Link as LinkScroll } from 'react-scroll';
import { Tooltip } from '@mui/material';
import './Navbar.scss';

const Badge: React.FC = () => {
    return (
        <img
            alt={constants.CODEWARS}
            src={constants.LINK_CODEWARS_BADGE}
            className="codewars--badge"
        />
    );
};

const buttonsData = [
    {
        scroll: constants.ABOUT_SCROLL,
        element: constants.ABOUT,
    },
    {
        scroll: constants.PORTFOLIO_SCROLL,
        element: constants.PORTFOLIO,
    },
];

const MenuButtons: React.FC = () => {
    return (
        <>
            {buttonsData.map((value, i) => (
                <LinkScroll
                    key={i}
                    to={value.scroll}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="menu__list--item"
                >
                    {value.element}
                </LinkScroll>
            ))}
        </>
    );
};

const Menu: React.FC = () => {
    return (
        <>
            <ul className="menu__list">
                <MenuButtons />
                <a
                    href={constants.LINK_CODEWARS}
                    target={constants.BLANK}
                    rel={constants.REL}
                    className="menu__list--item"
                >
                    <li>{constants.CODEWARS}</li>
                </a>
            </ul>
            <Badge />
        </>
    );
};

type Icons = {
    GITHUB: string;
    LINKEDIN: string;
};

type Email = {
    EMAIL: string;
};

type Style = {
    padding: string;
    width: string;
    height: string;
};

type propsCommon = {
    handleMouseOver: (event: MouseEvent<HTMLImageElement>) => void;
    handleMouseOut: (event: MouseEvent<HTMLImageElement>) => void;
    style: Style;
};

type propsLink = {
    icons: Icons;
};

type propsEmail = {
    email: Email;
    handleClick: () => void;
    clicked: boolean;
};

const LinkIcons: React.FC<propsCommon & propsLink> = ({
    handleMouseOver,
    handleMouseOut,
    icons,
    style,
}) => {
    return (
        <>
            {(Object.keys(icons) as (keyof typeof icons)[]).map((icon, i) => (
                <a
                    key={i}
                    href={enums.Address[icon]}
                    target={constants.BLANK}
                    rel={constants.REL}
                >
                    <Icon
                        name={icons[icon]}
                        iconStyle={style}
                        handleMouseOver={(event) => handleMouseOver(event)}
                        handleMouseOut={(event) => handleMouseOut(event)}
                    />
                </a>
            ))}
        </>
    );
};

const EmailIcon: React.FC<propsCommon & propsEmail> = ({
    handleMouseOver,
    handleMouseOut,
    handleClick,
    style,
    email,
    clicked,
}) => {
    return (
        <>
            <Tooltip
                title={
                    !clicked ? constants.CLICK_EMAIL : constants.EMAIL_COPIED
                }
                arrow
                placement="bottom"
            >
                <button className="header__icons--email" onClick={handleClick}>
                    <Icon
                        name={email.EMAIL}
                        iconStyle={style}
                        handleMouseOver={(
                            event: MouseEvent<HTMLImageElement>,
                        ) => handleMouseOver(event)}
                        handleMouseOut={(event: MouseEvent<HTMLImageElement>) =>
                            handleMouseOut(event)
                        }
                    />
                </button>
            </Tooltip>
        </>
    );
};

const ContactIcons: React.FC = () => {
    const [active, setActive] = useState('');
    const [clicked, setClicked] = useState(false);

    const style = {
        padding: '0 10px 0 10px',
        width: '20px',
        height: '20px',
    };

    const handleMouseOver = (event: MouseEvent<HTMLImageElement>) => {
        if (event) {
            setActive(event.currentTarget.alt);
            setClicked(false);
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
                : enums.IconsHover.LINKEDIN,
    };

    const email = {
        EMAIL:
            active !== enums.IconsNormal.EMAIL
                ? enums.IconsNormal.EMAIL
                : enums.IconsHover.EMAIL,
    };

    const handleClick = () => {
        navigator.clipboard.writeText(constants.MY_EMAIL);
        setClicked(true);
    };
    return (
        <div className="header__icons">
            <LinkIcons
                handleMouseOut={handleMouseOut}
                handleMouseOver={handleMouseOver}
                icons={icons}
                style={style}
            />
            <EmailIcon
                handleMouseOut={handleMouseOut}
                handleMouseOver={handleMouseOver}
                handleClick={handleClick}
                email={email}
                style={style}
                clicked={clicked}
            />
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
