import { useQuery } from '@tanstack/react-query';
import { getClientsData } from '../api/methods';

export const useClients = () => {
  const {
    data: clients,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['clients'],
    queryFn: getClientsData,
  });

  if (isLoading) {
    console.log('%c [useClients] Pierwsze pobieranie (brak cache)...', 'color: orange');
  } else if (isFetching) {
    console.log('%c [useClients] Odświeżanie danych w tle (mamy cache)...', 'color: blue');
  } else {
    console.log('%c [useClients] Dane serwowane z cache (są aktualne).', 'color: green');
  }

  // isLoading - kiedy nie ma cachu i react query fetchuje dane
  // isFetching - react query sprawdza czy na serwerze sa nowe dane, niezależnie od tego czy są dane w cache czy nie


  return { clients, error, isLoading, isFetching };
};
