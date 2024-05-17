import css from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ handleClickMore }) => {
  return (
    <div className={css.body}>
      <button className={css.btn} onClick={handleClickMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
