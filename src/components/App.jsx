import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((this.state.good / totalFeedback) * 100) : 0;
  };

  render() {
    return (
      <>
        <Section
          countFeedback={this.countFeedback}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        >
          {
            <>
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.countFeedback} />
              <Statistics stateStat={this.state} />
            </>
          }
        </Section>
      </>
    );
  }
}

export default App;
