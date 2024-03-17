import css from './Options.module.css';
import { useEffect } from 'react';

const Options = ({
  totalFeedback,
  setIsFeedbackVisible,
  handleClickFeedbackOptions,
}) => {
  useEffect(() => {
    if (totalFeedback > 0) {
      setIsFeedbackVisible(true);
    }
  }, [totalFeedback, setIsFeedbackVisible]);

  const handleResetFeedback = () => {
    handleClickFeedbackOptions('reset');
    setIsFeedbackVisible(false);
  };

  return (
    <div className={css.optionsButtonContainer}>
      <button
        onClick={() => handleClickFeedbackOptions('good')}
        className={css.optionsButton}
      >
        Good
      </button>
      <button
        onClick={() => handleClickFeedbackOptions('neutral')}
        className={css.optionsButton}
      >
        Neutral
      </button>
      <button
        onClick={() => handleClickFeedbackOptions('bad')}
        className={css.optionsButton}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleResetFeedback} className={css.optionsButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
