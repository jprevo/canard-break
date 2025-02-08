import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import fetchLastAccessConfig from './lastAccessService';

dayjs.extend(relativeTime);

const LastAccess = () => {
  const [relative, setRelative] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedTime = localStorage.getItem('lastAccessTime');
    const now = Date.now();
    localStorage.setItem('lastAccessTime', now.toString());
    const diffSeconds = storedTime ? (now - parseInt(storedTime, 10)) / 1000 : 0;

    fetchLastAccessConfig()
      .then(config => {
        // Determine message based on elapsed seconds
        let selected = config.messages.find(
          m => diffSeconds >= m.minSeconds && diffSeconds < m.maxSeconds
        );
        setMessage(selected ? selected.message : config.default);
      })
      .catch(() => {
        setMessage("Welcome to your break!");
      });

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
    <div className="mb-3 text-center">
      <h5>{message}</h5>
      <small>Last visited: {relative}</small>
    </div>
  );
};

export default LastAccess;
