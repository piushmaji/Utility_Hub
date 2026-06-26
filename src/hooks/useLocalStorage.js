import { useState, useEffect } from 'react';

/**
 * Custom hook to sync state with localStorage.
 * @param {string} key - The localStorage key.
 * @param {any} initialValue - The fallback value if key doesn't exist.
 * @returns {[any, Function]} - State and setter function.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
