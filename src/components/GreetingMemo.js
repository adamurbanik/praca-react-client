// React.memo

import { memo, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../common/providers/MyContext';
// import { saveCall } from '../hooks/repo';
import repo from '../hooks/repo';

let countRender = 0;

const GreetingMemoComponent = ({
  person = {},
  name = '',
  propKey = 0,
  personName,
}) => {
  const navigate = useNavigate();
  const myContext = useContext(MyContext);

  // useEffect(() => {
  //   console.log('rendering GreetingMemo')
  //   console.log('GreetingMemo person', person)
  // })

  // useEffect(() => {
  //   console.log('person changed')
  // }, [person])

  // componentDidMount
  useEffect(() => {
    // console.log('pierwsze i jednorazowe uzycie');

    // componentWillUnmount
    return () => {
      console.log('unmounting GreetingMemo');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    // console.log('component did update')
    // console.log('name', name)
  }, [name]);

  // podczas kazdego renderu
  useEffect(() => {
    // console.log('Greeting memo is rendering');
  });

  const navigateHome = () => navigate('/');

  return (
    <div>
      {/* <div>person.key {person.key}</div> */}
      <br />
      <br />
      <div>Greeting Memo component</div>
      <br />
      <div>personName: {person?.personName}</div>
      <br />
      <div>nameVariants: {person?.nameVariants?.polish}</div>
      <div>name: {name}</div>
      <br />
      <br />
      count: {(countRender = countRender + 1)}
      <br />
      <br />
      <br />
      <button onClick={repo.saveCall}>save call</button>
      <br />
      <br />
      <br />
      <button onClick={navigateHome}>Navigate Home</button>
    </div>
  );
};

// const personDetails = {
//   personName: 'someName',
//   nameVariants: {
//     polish: 'jakiesImie',
//     japan: '何かの名前',
//     slovak: 'nejaké meno'
//   },
//   adressFirst: 'no-adres',
//   adressSecond: 'no-adres',
// };

const checkIfEqual = (prevProps, nextProps) => {
  // console.log(prevProps.person.personName === nextProps.person.personName)
  // console.log('checkIfEqual')

  // if(prevProps.person.personName === nextProps.person.personName) {
  //   console.log('no render')
  //   return true;
  // }

  // return false;

  // console.log('checkIfEqual')
  // console.log(prevProps === nextProps)
  // console.log(prevProps.person === nextProps.person)
  // console.log(prevProps.person.nameVariants === nextProps.person.nameVariants)
  // console.log(prevProps.person.personName === nextProps.person.personName)
  // if(prevProps.person.nameVariants === nextProps.person.nameVariants) {
  //   console.log('no render')
  //   return true;
  // }

  // console.log('prevProps.person.nameVariants.polish', prevProps?.person?.nameVariants?.polish);
  // console.log('nextProps.person.nameVariants.polish', nextProps?.person?.nameVariants?.polish)

  // console.log('Object.is', Object.is(prevProps?.person?.personName, nextProps?.person?.personName))
  // console.log('Object.is', Object.is(prevProps?.person?.nameVariants?.polish, nextProps?.person?.nameVariants?.polish))
  // console.log(prevProps?.person?.personName, nextProps?.person?.personName)
  // console.log(prevProps?.name, nextProps?.name)
  // console.log(prevProps, nextProps)

  // if(Object.is(prevProps?.person?.nameVariants?.polish, nextProps?.person?.nameVariants?.polish)) {
  // if(Object.is(prevProps?.person?.nameVariants?.polish, nextProps?.person?.nameVariants?.polish)) {
  // if(Object.is(prevProps?.person?.personName, nextProps?.person?.personName)) {
  // if(Object.is(prevProps.person.personName, nextProps.person.personName)) {
  if (prevProps.person.personName === nextProps.person.personName) {
    // console.log('no render')
    return true;
  }

  // console.log('rendering')
  return false;
};

// const GreetingMemoized = memo(GreetingMemo);
// export { GreetingMemoized as GreetingMemo };

const GreetingMemo = memo(GreetingMemoComponent);
export { GreetingMemo };
