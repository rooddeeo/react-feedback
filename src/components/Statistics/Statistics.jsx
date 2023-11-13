import React from 'react';
import css from './Statistics.module.css';

const Statistics = (stateStat) => {
    return (
      <div>
        <p className={css.good}>Good: {stateStat.good}</p>
        <p className={css.neutral}>Neutral: {stateStat.neutral}</p>
        <p className={css.bad}>Bad: {stateStat.bad}</p>
        {/* <p>
          Total:{this.countTotalFeedback(
            stateStat.good,
            stateStat.neutral,
            stateStat.bad
          )}
        </p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p> */}
      </div>
    );

}

export default Statistics;
