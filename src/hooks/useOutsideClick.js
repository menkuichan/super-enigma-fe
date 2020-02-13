import { useEffect } from 'react';

export default (ref, callback, eventType) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener(eventType, handleClickOutside);
    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  });
};
