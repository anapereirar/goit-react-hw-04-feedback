import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  //TOTAL FEEDBACK
 const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  //POSITIVE PERCENTAGE
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  //COMMENT INCREMENTER
  // onLeaveFeedback = state => {
  //   this.setState(prevState => ({
  //     [state]: prevState[state] + 1,
  //   }));
  // };

  //COMMENT INCREMENTER
  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        position: 'absolute',  
        top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
      }}>
        <Section title = "Please leave feedback" >
           <FeedbackOptions
           options={['good', 'neutral', 'bad']}
           onLeaveFeedback={onLeaveFeedback}
         /> 
         {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
   ):(
        <Notification message="No hay comentarios" />
        )} 
        </Section>
      </div>
    );
}

export default App;
