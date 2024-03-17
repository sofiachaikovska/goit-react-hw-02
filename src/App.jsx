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

  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback(initialFeedback);
    } else {
      setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        setIsFeedbackVisible={setIsFeedbackVisible}
        handleClickFeedbackOptions={updateFeedback}
      />
      {isFeedbackVisible ? (
        <Feedback feedback={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
