import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from 'components/Statistics/Statistics';
// import Notification from 'components/Notification/Notification';

const Section = ({ children, countFeedback, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>
      <section>
        <h2>Please leave feedback</h2>
        <FeedbackOptions onLeaveFeedback={countFeedback} />
      </section>

      <section>
        <h2>Statistics</h2>
        {countTotalFeedback() ? (
          <Statistics
            good={children.good}
            neutral={children.neutral}
            bad={children.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          "No feedback given"
          // <Notification message="No feedback given" />
        )}
      </section>
    </>
  );
};

export default Section;