import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }

    window.localStorage.setItem(key, JSON.stringify(key, initialValue));
    return initialValue;
  });

  const setValue = value => {
    //save state
    setStoredValue(value);
    // save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

// To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined

//const [storedValue, setStoredValue] = useState(() => {
// Get from local storage by key

// const item = window.localStorage.getItem(key);

// Parse and return stored json or, if undefined, return initialValue
//     return item ? JSON.parse(item) : initialValue;
//   });
