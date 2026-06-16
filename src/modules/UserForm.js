import {
  lazy,
  Suspense,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from 'react';
// import { GreetingMemo } from '../components/GreetingMemo';
// import { GreetingDeferred } from '../components/GreetingDeferred';
import { Clients } from './Clients';
import { useSingleton2 } from '../hooks/useSingleton';
import { useClients } from '../common/hooks/useClients';

const GreetingDeferred = lazy(() => import('../components/GreetingDeferred'));

// import { useTryApi } from '../hooks/useTryApi';

// const { save: saveCall } = repo();

let key;

const personDetailsGlobal = {
  personName: 'someName',
  nameVariants: {
    polish: 'jakiesImie',
    japan: '何かの名前',
    slovak: 'nejaké meno',
  },
  adressFirst: 'no-adres',
  adressSecond: 'no-adres',
};

const UserForm = ({ personDetails }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [person, setPerson] = useState(personDetails);
  const deferredName = useDeferredValue(name);
  const userFormRef = useRef(null);
  const { getInstance } = useSingleton2();
  const { clients, error, isLoading, isFetching } = useClients();

  // let personName = ''
  let key = 0;

  let somePerson = {
    key: 0,
    personName: 'someName',
    nameVariants: {
      polish: 'jakiesImie',
      japan: '何かの名前',
      slovak: 'nejaké meno',
    },
    adressFirst: 'no-adres',
    adressSecond: 'no-adres',
  };

  useEffect(() => {
    // console.log('User Form component is mounting')
  }, []);

  useEffect(() => {
    // console.log('render UserForm happens');

    // incrementCount();
    // incrementCount();
    // incrementCount();

    // console.log('user form singleton', getCount())

    // console.log('instance', getInstance())

    // console.log('User Form component is rendering');
  });

  useEffect(() => {
    return () => {
      console.log('User Form component will unmount');
    };
  }, []);

  // useEffect(() => {
  //   console.log('person updated', person.personName)
  // }, [person])

  // useEffect(() => {
  //   console.log('render after name update')
  // }, [name])

  const handleSubmit = () => {
    // console.log(`submitting name: ${name}`);
  };
  const cachedOnSubmit = useCallback(handleSubmit, [name]);

  const showUserForm = () => {
    userFormRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handlePersonName = () => {
    person.personName = 'wojtek';

    // setAddress('ul. Wielicka 14')
    // setPerson(person)

    // setPerson((current) => ({
    //   ...current,
    //   personName: 'wojtek'
    // }))
    // console.log('person handler change name', person)
  };

  return (
    <>
      <header className="User-form-header">
        user form header
        <button onClick={showUserForm}>Show User Form</button>
        <button onClick={handlePersonName}>Set person name</button>
      </header>
      <div className="User-form-component" ref={userFormRef}>
        <label htmlFor="address">Address</label>
        <input
          value={address}
          id="address"
          onChange={(elem) => setAddress(elem.target.value)}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          onChange={(elem) => {
            // normal example of using memo
            setName((current) => (current = elem.target.value));

            // normal example of using memo
            // setPerson((current) => ({
            //   ...current,
            //   personName: elem.target.value
            // }))

            // normal example of using memo
            // setPerson((current) => ({
            //   ...current,
            //   nameVariants: {
            //     polish: elem.target.value
            //   }
            // }))

            // setPerson({...person, personName: elem.target.value})

            // person.personName = elem.target.value;
            // person.nameVariants.polish = elem.target.value;

            // setPerson({ ...person, nameVariants: { polish: elem.target.value }})

            // somePerson.personName = elem.target.value;
            // somePerson.key = key + 1

            // console.log('somePerson', somePerson)

            // personDetails.personName = elem.target.value;
            // key = elem.target.value;

            // personDetailsGlobal.personName = elem.target.value;

            // somePerson.personName = elem.target.value;

            // somePerson = {
            //   ...somePerson,
            //   personName: elem.target.value
            // }

            // personName = elem.target.value;
          }}
        />

        <br />

        <Suspense fallback={<h2>Loading...</h2>}>
          <GreetingDeferred personDetails={personDetails} />
        </Suspense>

        {/*<GreetingUseCallback onSubmit={cachedOnSubmit} />*/}
        <br />
        <br />
        <Clients
          clients={clients}
          person={person}
          name={name}
          isLoading={isLoading}
          error={error}
          isFetching={isFetching}
        />
      </div>
    </>
  );
};

export { UserForm };
