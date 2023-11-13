import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ counter }) => {
  return (
    <div>
      <h1 className={css.title}>Please leave feedback</h1>
      <button
        className={css.button}
        onClick={() => {
          counter('good');
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          counter('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          counter('bad');
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
