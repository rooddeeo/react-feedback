import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  state = this.props.stateStat;
  TotalFeedback = 0;

  counter = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.TotalFeedback = this.countTotalFeedback(
      this.state.good,
      this.state.neutral,
      this.state.bad
    );
    return this.TotalFeedback
      ? Math.round((this.state.good / this.TotalFeedback) * 100)
      : 0;
  };

  render() {
    return (
      <div>
        <h2 className={css.subTitle}>Statistics</h2>
        <p className={css.good}>Good: {this.state.good}</p>
        <p className={css.neutral}>Neutral: {this.state.neutral}</p>
        <p className={css.bad}>Bad: {this.state.bad}</p>
        <p>
          Total:{this.countTotalFeedback(
            this.state.good,
            this.state.neutral,
            this.state.bad
          )}
        </p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Statistics;
