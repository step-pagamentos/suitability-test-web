import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Question = ({ question, toggleAnswerId }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const answerId = parseInt(event.target.value);
    setValue(answerId);
    toggleAnswerId(answerId);
  };

  return (
    <FormControl style={{ display: 'block', margin: 20 }}>
      <FormLabel>{question.text}</FormLabel>
      <RadioGroup value={value} onChange={handleChange}>
        {question.answers.map((answer, index) => 
          <FormControlLabel value={answer.id} control={<Radio />} label={answer.text} />
        )}
      </RadioGroup>
    </FormControl>
  );
}

export default Question;
