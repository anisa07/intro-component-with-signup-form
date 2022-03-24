import React from 'react';
import {Info} from "./components/info/Info";
import {AuthBlock} from "./components/authBlock/AuthBlock";
import {AppContainer} from "./appStyles";

function App() {
    return (
        <AppContainer>
            <Info/>
            <AuthBlock />
        </AppContainer>
    );
}

export default App;
