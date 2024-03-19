import css from './Feedback.module.css';

const Feedback = ({ feedback, total, countPositive }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbsckListItem}>Good: {feedback.good}</li>
      <li className={css.feedbsckListItem}>Neutral: {feedback.neutral}</li>
      <li className={css.feedbsckListItem}>Bad: {feedback.bad}</li>
      <li className={css.feedbsckListItem}>Total: {total}</li>
      <li className={css.feedbsckListItem}>Positive: {countPositive}%</li>
    </ul>
  );
};

export default Feedback;
