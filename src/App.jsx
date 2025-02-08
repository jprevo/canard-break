import React, { useState, useEffect } from 'react';
import fetchJoke from './jokeService';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [joke, setJoke] = useState('');

    const toggleMode = () => setDarkMode(!darkMode);

    const loadJoke = () => {
        fetchJoke().then(newJoke => setJoke(newJoke));
    };

    useEffect(() => {
        loadJoke();
    }, []);

    return (
        <div className={`container-fluid ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} d-flex flex-column justify-content-center align-items-center vh-100`}>
            <h1 className="display-1 text-center">{joke}</h1>
            <button className="btn btn-secondary mt-4" onClick={toggleMode}>Toggle Mode</button>
            <button className="btn btn-primary mt-2" onClick={loadJoke}>Reload Joke</button>
        </div>
    );
}