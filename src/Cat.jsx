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
          style={{
            maxWidth: '100%',
            maxHeight: '300px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      ) : (
        <p>Loading cat image...</p>
      )}
    </>
  );
}
