import React from 'react';

function Story({ values, onRestart }) {
    const { pokemon, move, opponent } = values;
  
    return (
      <div>
        <p>In an intense battle, {pokemon} used {move}! It's super effective against {opponent}.</p>
        <button onClick={onRestart}>Restart</button>
      </div>
    );
  }
  
  export default Story;