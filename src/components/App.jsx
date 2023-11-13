import React from 'react';
import Section from './Section/Section.jsx';

export const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Section stateStat={state} />
    </>
  );
};
export default App;
