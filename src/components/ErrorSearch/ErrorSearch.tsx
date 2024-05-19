import { TbFaceIdError } from 'react-icons/tb';
import css from './ErrorSearch.module.scss';

const ErrorSearch = () => {
  return (
    <div className={css.body}>
      <TbFaceIdError className={css.error} />
    </div>
  );
};

export default ErrorSearch;
