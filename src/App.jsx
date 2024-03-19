import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Feedback from './components/Feedback/Feedback';

const initialFeedback = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedback, setFeedback] = useState(() => {
    const extantFeedback = localStorage.getItem('feedbackValues');
    const parsedFeedback = JSON.parse(extantFeedback) ?? initialFeedback;
    return parsedFeedback;
  });

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback(initialFeedback);
    } else {
      setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const goodFeedbackNumber = feedback.good;
  const neutralFeedbackNumber = feedback.neutral;

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const countPositive =
    totalFeedback > 0
      ? Math.round(
          ((goodFeedbackNumber + neutralFeedbackNumber) / totalFeedback) * 100,
        )
      : 0;

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        handleClickFeedbackOptions={updateFeedback}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          countPositive={countPositive}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
