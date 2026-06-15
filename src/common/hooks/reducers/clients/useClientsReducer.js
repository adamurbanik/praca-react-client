import { useCallback, useReducer } from 'react';
import { clientsReducer } from './clientsReducer';
import { getClientsData } from '../../../api/methods';


const initialState = { clients: [], isLoading: false, error: null };

export const useClientsReducer = () => {
  const [data, dispatch] = useReducer(clientsReducer, initialState);

  const getClients = useCallback(async () => {
    dispatch({ type: 'GET_CLIENTS' });

    try {
      const data  = await getClientsData();
      dispatch({ type: 'SET_CLIENTS', payload: data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }

  }, []);

  return [data, getClients];
};
