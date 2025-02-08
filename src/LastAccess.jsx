import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const LastAccess = () => {
  const [relative, setRelative] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedTime = localStorage.getItem('lastAccessTime');
    const now = Date.now();
    if (storedTime) {
      const diff = now - parseInt(storedTime, 10);
      const diffSeconds = diff / 1000;
      if (diffSeconds < 60) {
        setMessage("Blink and you missed it!");
      } else if (diffSeconds < 3600) {
        setMessage("Just a short break, huh?");
      } else {
        setMessage("Long time no see! Ready for a break?");
      }
    } else {
      setMessage("Welcome to your break!");
    }
    localStorage.setItem('lastAccessTime', now.toString());

    const timer = setInterval(() => {
      if (storedTime) {
        setRelative(dayjs(parseInt(storedTime, 10)).fromNow());
      } else {
        setRelative("just now");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-3">
      <h5>{message}</h5>
      <small>Last visited: {relative}</small>
    </div>
  );
};

export default LastAccess;
