import React, { useContext, useState } from 'react';
import { NotificationContext } from './notificationContext';

const StarshipContext = React.createContext();
const StarshipProvider = ({ children }) => {
  const [totalPages, setTotalPages] = useState(1);
  const { notify } = useContext(NotificationContext)
  const [isLoading, setLoading] = useState(true);

  const fetchStarships = async (pageNumber) => {
    try {
      setLoading(true);
      const url = `https://swapi.dev/api/starships/?page=${pageNumber ?? 1}`
      const response = await fetch(url);
      const data = await response.json();
      setTotalPages(Math.ceil(data.count / 10));
      return data;
    } catch (error) {
      notify('Failed to fetch starships, please try again later', 'error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StarshipContext.Provider value={{ fetchStarships, isLoading, totalPages }}>
      {children}
    </StarshipContext.Provider>
  );
}

export { StarshipProvider, StarshipContext }
