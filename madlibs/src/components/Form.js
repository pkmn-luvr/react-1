import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [values, setValues] = useState({
    pokemon: '',
    move: '',
    opponent: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Bonus - Form cannot be submitted unless all fields are filled out
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(values).every(value => value)) {
      onSubmit(values);
    } else {
      alert("Please fill out all fields...");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon" placeholder="Your Pokémon" value={values.pokemon} onChange={handleChange} />
      <input type="text" name="move" placeholder="Move Used" value={values.move} onChange={handleChange} />
      <input type="text" name="opponent" placeholder="Opponent Pokémon" value={values.opponent} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
