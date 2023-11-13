import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from 'components/Statistics/Statistics';

const Section = (stateStat) => {
  return (
    <>
      <section title="Please leave feedback">
        <FeedbackOptions />
      </section>

      <section title="Statistics">
        <Statistics stateStat = {stateStat} />
      </section>
    </>
  );
};

export default Section;
