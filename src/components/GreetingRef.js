import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../modules/UserForm';
import { incrementCount, getCount } from '../hooks/useSingleton';
import { useSingleton2 } from '../hooks/useSingleton'
import { useClients } from '../common/hooks/useClients';

let countRender = 0;

export const GreetingRef = () => {
  const timeoutId = useRef(null);
  const intervalId = useRef(null);
  const navigate = useNavigate();
  const { getInstance } = useSingleton2()

  const data = useClients();
  console.log('data from useClients in GreetingRef', data);


  const evaluateTimeout = () => {
    timeoutId.current = window.setTimeout(() => {
      // console.log('timeout set');
    }, 5000);
  };

  const evaluateInterval = () => {
    intervalId.current = window.setInterval(() => {
      // console.log('interval set');
    }, 5000);
  };

  useEffect(() => {
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();

    // console.log('greeting ref singleton', getCount())


  })

  useEffect(() => {
    evaluateTimeout();


    return () => {
      const id = timeoutId.current;
      id && clearTimeout(id);
      timeoutId.current = null;
      // console.log('unmounting Greeting ref component')
    };
  }, []);

  useEffect(() => {
    evaluateInterval();

    return () => {
      const id = intervalId.current;
      id && clearInterval(id);
      intervalId.current = null;
    };
  }, []);

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <div>GreetingRef component</div>
      <br />
      <br />
      GreetingRef count: {(countRender = countRender + 1)}
      <br />
      <br />
      <button onClick={handleNavigate}>Navigate Home page</button>
      <br />
      <br />


      <a href="www.onet.pl">Onet link</a>

      <a href=""></a>

      <br />
      <br />

      <input type="text" />
    
      
      <br />
      <br />

      {/* <time dateTime="2018-07-07">July 7</time> in London's Hyde Park.
      
      <br />
      <br />
      <br />

      <dialog open={true}>
        dialog
      </dialog>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <progress value="50" max="100"></progress>

      Jakis tekst ktory musi zostac zlamany.
      Jakis tekst ktory musi zostac zlamany. 
      <wbr />Jakis tekst ktory musi zostac zlamany. 
      Jakis tekst ktory musi zostac zlamany. 
      <wbr />Jakis tekst ktory musi zostac zlamany. 
      Jakis tekst ktory musi zostac zlamany. 

      <br />
      <br />
      <br />
      
      <figure>
        <img src="" alt="jakis image" /> 
        <figcaption>opis do zdjecia</figcaption>
      </figure> */}

      <header>header</header>
      
      <footer>footer</footer>

      <nav></nav>

      <section></section>

      <article></article>

      <figure></figure>

      <figcaption></figcaption>

      <dialog></dialog>

      <progress value="30" max="100"></progress>

      <wbr></wbr>

      <time dateTime=""></time>

      <aside></aside>

      <main></main>


      <br />
      <br />
      <br />

      <input type="tel" />

    </>
  );
};

export default GreetingRef;