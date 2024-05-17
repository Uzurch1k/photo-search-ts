import { TbFaceIdError } from 'react-icons/tb';

import css from './ErrorSearch.module.scss';

const ErrorSearch = () => {
  return (
    <div className={css.error}>
      <TbFaceIdError style={{ fontSize: '300px', color: '#5f828d' }} />
    </div>
  );
};

export default ErrorSearch;
