import React, { ReactElement } from 'react';
import { NormalMode } from './components/app/normalMode';
import './App.css';

const App = (): ReactElement | null => {
    return (
        // switch (initStatus) {
        //   case ConnectionStatus.CONNECTING:
        //     return <ConnectingMode />;
        //   case ConnectionStatus.FAILED:
        //     return <ConnectionErrorMode/>;
        //   case ConnectionStatus.CONNECTED:
        //     return <NormalMode/>\
        //   defsult:
        //   return null;

        // }
        <NormalMode />
    );
};

export default App;
