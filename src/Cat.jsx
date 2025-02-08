import React, { useState, useEffect } from 'react';
import fetchCat from './catService';

export default function Cat({ reloadKey }) { // added reloadKey prop
  const [catUrl, setCatUrl] = useState('');

  useEffect(() => {
    fetchCat().then(url => setCatUrl(url));
  }, [reloadKey]); // include reloadKey to refetch on update

  return (
    <>
      {catUrl ? (
        <img 
          src={catUrl} 
          alt="Random Cat" 
          className="cat-img" // replaced inline styles with CSS class
        />
      ) : (
        <p>Loading cat image...</p>
      )}
    </>
  );
}
