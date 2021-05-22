import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { Joke } from '../src/joke/Joke';

const App = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  return (
    <div className="container">
      <header></header>
      <main>
        <div className="container">
          <div className="joke">
            <div className="joke__body">
              <div className="joke__user">
                <img
                  className="user-avatar"
                  src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
                />
                <p className="user-name">Neroxx</p>
              </div>

              <p className="joke__text">
                The secret service isn't allowed to yell "Get down!" anymore
                when the president is about to be attacked. Now they have to
                yell "Donald, duck!"
              </p>
            </div>
            <div className="joke__likes">
              <button
                id="btn-up"
                className="btn-like btn-like--up"
                onClick={() => {
                  setLikeCount(likeCount + 1);
                }}
              ></button>
              <span id="likes-up" className="likes-count likes-count--up">
                {likeCount}
              </span>
              <button
                id="btn-down"
                className="btn-like btn-like--down"
                onClick={() => {
                  setDislikeCount(dislikeCount + 1);
                }}
              ></button>
              <span id="likes-down" className="likes-count likes-count--down">
                {dislikeCount}
              </span>
            </div>
          </div>
        </div>

        <Joke />
      </main>
      <footer></footer>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
