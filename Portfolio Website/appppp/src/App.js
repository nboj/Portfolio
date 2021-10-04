import logo from './logo.svg';
import './App.css';
import { useSpring, animated, config } from 'react-spring'; 

function App() {
  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(-30px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)'
    }, 
    reset: true,
    delay: 200,
    config: config.gentle,
    loop: { reverse: true }
  });
  return (
    <div className="App"> 
      <header className="App-header">
        <animated.div style={animation}>
          <p>Hello there!</p>
        </animated.div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
