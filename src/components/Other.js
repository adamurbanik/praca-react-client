import { useEffect, useState } from 'react';
import { GreetingMemo } from './GreetingMemo';
import { useClientsReducer } from '../common/hooks/reducers/clients/useClientsReducer';


export const Other = () => {
  const [myName, setMyName] = useState('');
  const [address, setAddress] = useState('');
  // const data = useClients();

  const [data, getClients] = useClientsReducer();
  console.log('data from useClientsReducer in Other', data);

  useEffect(() => {
    getClients()
  }, [getClients])

  useEffect(() => {
    console.log('Other rendering with data', data); 
  },[data]);

  return (
    <>
      <div>Other Component</div>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
      <div>
        <GreetingMemo name={myName} />
      </div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {/*<Calculator />*/}
    </>
  );
};
