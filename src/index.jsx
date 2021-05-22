import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Joke } from './joke/Joke';
import { jokes } from '../jokes';

const App = () => {
  return (
    <div className="container">
      <header>
        <h2>All jokes</h2>
      </header>
      <main>
        <div className="container">
          {jokes.map((joke, index) => (
            <Joke key={index} props={joke} />
          ))}
        </div>
      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
