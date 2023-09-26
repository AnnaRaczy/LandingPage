import React, { ReactElement } from 'react';
import { NormalMode } from './components/app/normalMode';
import './App.scss';

const App = (): ReactElement | null => {
    return (
        <>
            <NormalMode />
        </>
    );
};

export default App;
