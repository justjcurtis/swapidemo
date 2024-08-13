import React, { useState } from 'react';

const StarshipContext = React.createContext();
const StarshipProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const fetchStarships = async (pageNumber) => {
    try {
      setLoading(true);
      const url = `https://swapi.dev/api/starships/?page=${pageNumber ?? 1}`
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StarshipContext.Provider value={{ fetchStarships, isLoading }}>
      {children}
    </StarshipContext.Provider>
  );
}

export { StarshipProvider, StarshipContext }
