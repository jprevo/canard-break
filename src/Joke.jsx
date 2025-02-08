import React, { useState, useEffect } from 'react';
import fetchJoke from './jokeService';

export default function Joke({ reloadKey }) {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke().then(setJoke);
  }, [reloadKey]);

  return (
    <h1 className="display-1 text-center">{joke}</h1>
  );
}
