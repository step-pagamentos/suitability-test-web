import React, { useEffect, useState } from 'react';
import Question from './Question';

const SuitabilityTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answerIds, setAnswerIds] = useState([]);

  const toggleAnswerId = (answerId) => {
    const index = answerIds.indexOf(answerId);

    if (index > -1) {
      answerIds.splice(index, 1);
    } else {
      answerIds.push(answerId);
    }
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/questionnaires/1/questions')
      .then(response => response.json()
        .then(questions => {
          setQuestions(questions);
        })
      );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_API_URL + '/questionnaires/1/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submission: {
          answerIds,
          userId: 1,
        },
      }),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => <Question question={question} toggleAnswerId={toggleAnswerId} />)}
      <button type="sumit" style={{ margin: 20 }}>Submit</button>
    </form>
  );
}

export default SuitabilityTest;
