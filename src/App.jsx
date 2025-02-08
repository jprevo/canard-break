import React, { useState } from 'react';
import Cat from './Cat';
import Joke from './Joke';
import LastAccess from './LastAccess';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    const toggleMode = () => setDarkMode(!darkMode);

    const reloadContent = () => {
        setReloadKey(prev => prev + 1);
    };

    return (
        <div className={`container-fluid ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} d-flex flex-column justify-content-center align-items-center vh-100`}>
            <LastAccess />
            <Cat reloadKey={reloadKey} />
            <Joke reloadKey={reloadKey} />
            <button className="btn btn-secondary mt-4" onClick={toggleMode}>Toggle Mode</button>
            <button className="btn btn-primary mt-2" onClick={reloadContent}>Reload Joke</button>
        </div>
    );
}