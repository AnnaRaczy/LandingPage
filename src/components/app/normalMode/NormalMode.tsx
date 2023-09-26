import React from 'react';
import { Navbar } from '../../navbar';
import { Main } from '../../main';

export const NormalMode: React.FC = () => {
    return (
        <div className="web__content">
            <Navbar />
            <Main />
        </div>
    );
};
