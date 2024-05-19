import css from './LoadMoreBtn.module.scss';

type LoadMoreBtnProps = {
  handleClickMore: () => void;
};

const LoadMoreBtn = ({ handleClickMore }: LoadMoreBtnProps) => {
  return (
    <div className={css.body}>
      <button className={css.btn} onClick={handleClickMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
