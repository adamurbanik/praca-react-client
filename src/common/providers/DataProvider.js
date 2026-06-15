import { createContext, useEffect, useMemo, useState } from 'react';
import { getClientsData } from '../api/methods';

const initialState = {
  state: {
    clients: [],
    isLoading: false,
    error: null,
  },
};

export const DataContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const clientsData = await getClientsData();

        isMounted && setClients(clientsData);
      } catch (err) {
        isMounted && setError(err.message || 'something went wrong');
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchClients();

    return () => {
      isMounted = false;
    };
  }, []);

  const contextValue = useMemo(() => {
    return {
      state: {
        clients,
        error,
        isLoading,
      },
    };
  }, [clients, error, isLoading]);

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
