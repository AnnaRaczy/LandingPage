import React from 'react';
import * as constants from '../../../utlis/constants';
import './Icon.scss';

type IconPropsType = {
    name: string;
    handleClick?: () => void;
    iconStyle?: {
        width?: string;
        height?: string;
        padding?: string;
        margin?: string;
        cursorPointer?: boolean;
    };
};

export const Icon: React.FC<IconPropsType> = ({
    name,
    handleClick,
    iconStyle,
}) => {
    const {
        width = '16px',
        height = '16px',
        padding = '0px',
        margin = '0px',
        cursorPointer = true,
    } = iconStyle ?? {};

    return (
        <img
            onClick={handleClick}
            src={constants.PATH_TO_ICON + name + constants.ICON_EXTENSION}
            alt={name}
            style={{ width, height, padding, margin }}
            className={`icon__common${
                !cursorPointer ? 'icon__common--disabled' : ''
            }`}
            data-testid="icon"
        />
    );
};
