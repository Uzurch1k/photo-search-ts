import { TbError404 } from 'react-icons/tb';
import css from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={css.body}>
      <TbError404 className={css.error} />
    </div>
  );
};

export default ErrorMessage;
