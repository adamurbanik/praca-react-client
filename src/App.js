import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Other } from './components/Other';
import { UserForm } from './modules/UserForm';
import './App.css';



// const person = {
//   personName: 'no-name',
//   adressFirst: 'no-adres',
//   adressSecond: 'no-adres'
// }

const person = {
  personName: 'someName',
  nameVariants: {
    polish: 'jakiesImie',
    japan: '何かの名前',
    slovak: 'nejaké meno',
  },
  adressFirst: 'no-adres',
  adressSecond: 'no-adres',
};

const GreetingRef = lazy(() => {
  console.log('lazy Greeting ref');
  return import('./components/GreetingRef');
});

function App() {
  const [personDetails, setPersonDetails] = useState({});


  useEffect(() => {
    // console.log('App component is rendering');
  });

  useEffect(() => {
    const personDetails = person;
    setPersonDetails(personDetails);
  }, []);

  return (
    <div className="App">
      <header className="App-header">React App</header>
      <Router>
          {/* <DataProvider> */}
          {/* <MyContext.Provider value={'changed provider state'}> */}
          <Routes>
            <Route path="/*">
              <Route
                path="*"
                element={<UserForm personDetails={personDetails} />}
              />
              <Route
                path="ref"
                element={
                  <Suspense fallback={<h2>Loading...</h2>}>
                    <GreetingRef />
                  </Suspense>
                }
              />
              <Route path="other" element={<Other />} />
            </Route>
          </Routes>
          {/* </MyContext.Provider> */}
          {/* </DataProvider> */}
      </Router>
    </div>
  );
}

export default App;
