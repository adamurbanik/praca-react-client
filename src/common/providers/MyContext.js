import { createContext } from 'react';

const initialState = {
  employees: [
    {
      id: 1,
      name: 'adamos',
    },
    {
      id: 2,
      name: 'marcos',
    },
    {
      id: 3,
      name: 'kasios',
    },
  ],
};

export const MyContext = createContext(initialState);
