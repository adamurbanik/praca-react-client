// const getClients = () => Promise.resolve(clients)
import {clients} from "../models/clients";
export const getClientsData = () => {
  return new Promise((resolve, reject) => {
    return resolve(clients);
  });
};
