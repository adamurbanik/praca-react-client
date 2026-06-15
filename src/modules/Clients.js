import { useNavigate } from 'react-router-dom';
import {memo, useContext, useEffect, useRef} from 'react';
import { DataContext } from '../common/providers/DataProvider';
import {GreetingMemo} from "../components/GreetingMemo";
// import { saveCall } from '../hooks/repo';
import repo from '../hooks/repo';

let count = 0;

const ClientsComponent = ({ clients, person, name }) => {
  // const {
  //   state: { clients },
  // } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getOnet = async () => {
      const response = await fetch('www.onet.pl');
    };

    getOnet();

    return () => {
      console.log('Clients component will unmount');
    };
  }, []);

  useEffect(() => {
    count = count + 1;
  });


  const navigateToGreetingRef = () => {
    navigate('/ref')
  }

  return (
    <>
      <div>
        {clients.map((client, index) => (
          <div key={index}>
            <div>client: {client.name}</div>
          </div>
        ))}
        <br />
        <div>count: {count}</div>

        <button onClick={navigateToGreetingRef}>Navigate Home page</button>

        <button onClick={repo.saveCall}>Save call</button>

        <GreetingMemo person={person} name={name} />

      </div>
    </>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  // console.log('clients props clients', clients);
  // console.log('clients props person', person);
  // console.log('clients props name', name);

  // console.log('clients prevProps clients', prevProps.clients === nextProps.clients);
  // console.log('clients prevProps clients', prevProps.name === nextProps.name);
  // console.log('clients prevProps clients', prevProps.person === nextProps.person);
  // console.log(prevProps.clients === nextProps.clients && prevProps.name === nextProps.name && prevProps.person === nextProps.person);



  return prevProps.clients === nextProps.clients && prevProps.name === nextProps.name && prevProps.person === nextProps.person
}
export const Clients = memo(ClientsComponent, arePropsEqual)
