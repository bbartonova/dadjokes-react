import React, { useState } from 'react';
import '../joke/style.css';
import { jokes } from 'jokes.js';

export const Joke = (props) => {
  return (
    <>
      <h2>Přehled vtipů</h2>
      <ul>
        {props.jokes.map((joke) => (
          <Joke
            key={jokes.id}
            id={jokes.id}
            userAvatar={jokes.avatar}
            userName={jokes.name}
            text={jokes.text}
            likes={jokes.likes}
            dislikes={jokes.dislikes}
          ></Joke>
        ))}
      </ul>
    </>
  );
};

render(<Joke />, document.querySelector('#app'));
