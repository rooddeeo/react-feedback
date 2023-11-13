import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // state = this.props.stateStat;
  TotalFeedback = 0;

  countFeedback = feedbackType => {
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
    <>
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.countFeedback}/>
      <Statistics stateStat={this.state} />
      <Section/>
    </>
  );
  }
}
export default App;
