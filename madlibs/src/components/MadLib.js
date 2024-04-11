import React, { useState } from 'react';
import Form from './Form';
import Story from './Story';

function MadLib() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    pokemon: '',
    move: '',
    opponent: ''
  });

  const handleSubmit = (values) => {
    setFormValues(values);
    setIsSubmitted(true);
  };

  // Bonus - Restart Button
  const handleRestart = () => {
    setIsSubmitted(false);
    setFormValues({});
  };

  return (
    <div>
      {isSubmitted ? (
        <Story values={formValues} onRestart={handleRestart} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default MadLib;
