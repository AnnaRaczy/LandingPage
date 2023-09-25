import React from 'react';
import * as constants from '../../../utils/constants';
import './Icon.scss';

type IconPropsType = {
    name: string;
    handleClick?: () => void;
    handleMouseOver: React.MouseEventHandler<HTMLImageElement>;
    handleMouseOut: React.MouseEventHandler<HTMLImageElement>;
    iconStyle?: {
        width?: string;
        height?: string;
        padding?: string;
        margin?: string;
    };
};

export const Icon: React.FC<IconPropsType> = ({
    name,
    handleClick,
    handleMouseOver,
    handleMouseOut,
    iconStyle,
}) => {
    const {
        width = '16px',
        height = '16px',
        padding = '0px',
        margin = '0px',
    } = iconStyle ?? {};

    return (
        <img
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseOut}
            onClick={handleClick}
            src={constants.PATH_TO_ICON + name + constants.ICON_EXTENSION}
            alt={name}
            style={{ width, height, padding, margin }}
            className="icon__common"
            data-testid="icon"
        />
    );
};
