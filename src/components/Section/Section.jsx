import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from 'components/Statistics/Statistics';

const Section = () => {
  return (
    <>
      <section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback = {this.countFeedback}/>
      </section>

      <section title="Statistics">
        {this.countTotalFeedback() ? (<Statistics
        good = {this.state.good}
        neutral = {this.state.neutral}
        bad = {this.state.bad}
        total = {this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}
        />
        ) :(<Notification message="No feedbackgiven"/>)
      }
      </section>
    </>
  );
};

export default Section;
{/* <section >
    <h2>{title}</h2>
    {children}
  </section> */}

  // <Section title="Please leave feedback">
  //         <FeedbackOptions .... />
  //       </Section>