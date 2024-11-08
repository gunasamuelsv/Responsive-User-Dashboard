import React, { createContext, useState, useContext } from 'react';

// Create the Context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Provider component to wrap around the App
export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  const addFavorite = (article) => setFavorites([...favorites, article]);
  const addHistory = (article) => setHistory([...history, article]);

  return (
    <AppContext.Provider value={{ favorites, history, addFavorite, addHistory }}>
      {children}
    </AppContext.Provider>
  );
};
