// useDeferred(value)
// useMemo(() => {}, [])

import { useDeferredValue, useEffect, useMemo, useState } from 'react';

let countRender = 0;

let personName = '';

let personDetails = {
  personName: 'someName',
  nameVariants: {
    polish: 'jakiesImie',
    japan: '何かの名前',
    slovak: 'nejaké meno',
  },
  adressFirst: 'no-adres',
  adressSecond: 'no-adres',
};

export const GreetingDeferred = ({ personDetails }) => {
  const [name, setName] = useState('');
  const deferredValue = useDeferredValue(name);

  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const dataList = [];
  //   for (let i = 0; i < 9999; i++) {
  //     dataList.push(deferredValue)
  //   }
  //   setList(dataList)
  // }, [deferredValue])

  useEffect(() => {
  });

  useEffect(() => {
  });

  // const list = useMemo(() => {
  //   const dataList = [];
  //   for (let i = 0; i < 9999; i++) {
  //     dataList.push(deferredValue);
  //   }
  //   return dataList;
  // }, [deferredValue]);

  // const result = useMemo(() => {
  //   return deferredValue.toUpperCase();
  // }, [deferredValue]);

  // const personName = useMemo(() => {
  //   console.log(personDetails)
  // }, [personDetails])

  // const memoizedPerson = useMemo(() => {
  //   console.log('memoizedPerson')
  // }, [personDetails])

  return (
    <>
      <br/>
      <div>GreetingDeferred component</div>
      <br/>
      GreetingDeferred render count: {(countRender = countRender + 1)}
      <div className="greetingContent">
        
        <div style={{ backgroundColor: 'grey' }} id="karolId" className="karolClass">
          <span>Karol Karol Karol Karol Karol Karol 
            <strong>Karol Karol Karol Karol</strong>
          </span> 
        </div>
        
        <input type="text" />

        <header  id="my-header">moj odnosnik my-header</header>

        <details>
          To sa jakies details nie wiadomo poki co od czego
          <summary>
            to jest summary ktore sie znajduje w details
          </summary>
        </details>

        <div className="pDiv">
          <strong className="strongClass">strong element</strong>
          <br/>
          <span className="spanClass">span element</span>
        </div>


        <div className="someTesting">
          <p>jakis tam paragraph</p>
          <p className="paragraph">
            jakis tam paragraph <strong>strong text</strong>
          </p>
          <p>jakis tam paragraph</p>
          <p>
            jakis tam paragraph <span>span text</span>
          </p>
          <div>
            jakis tam div <strong>strong div</strong>
          </div>
          <div>
            jakis tam div <span>span div</span>
          </div>
        </div>

        <div className="someDiv">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            {/*<wbr />*/}
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <a
            target="_blank"
            href="https://blankwhitescreen.com/"
            rel="noreferrer"
          >
            Link do blank page
          </a>

          <a
            target="_blank"
            href="https://www.nytimes.com/international"
            rel="noreferrer"
          >
            Link do https://www.nytimes.com/international/
          </a>

          <a
            target="_blank"
            href="https://pl.wikipedia.org/wiki/Wikipedia"
            rel="noreferrer"
          >
            Link do wikipedii
          </a>
        </div>

        <label className="greetingLabel" htmlFor="inputName">
          Greeting deferred input
        </label>
        <div>
          <a>only child</a>
        </div>
        <input type="text" value="no value" name="inputName"/>
        <label>Greeting label another</label>
        <label>powiedz cos</label>
        <label>nic nie mow</label>
      </div>
      <div>
        <label htmlFor="special-input">special-input</label>
        <input
          name="special-input"
          type="text"
          onChange={(elem) => {
            setName((current) => (current = elem.target.value));
            personName = elem.target.value;
            // personDetails.personName = elem.target.value;
            // personDetails = {
            //   ...personDetails,
            //   personName: elem.target.value
            // }
          }}
        />
      </div>
      <div>name: {name && name}</div>
      {/* <div>deferredValue: {deferredValue}</div> */}
      {/* <div>result: {result}</div> */}
      {/* <div>personDetails.personName {personDetails.personName}</div> */}
      <div>personName {personName}</div>
      <div>
        {/* {list.map((element, index) => {
          return <div key={index}>{}</div>;
        })} */}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="#my-header">Link do mojego odnosnika my header</a>
    </>
  );
};

export default GreetingDeferred;