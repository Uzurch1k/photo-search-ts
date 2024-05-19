import React from 'react';

import Background from '../../Background/Background';

import css from './Wrapper.module.scss';

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <>
      <div className={css.wrapper}>{children}</div>
      <Background />
    </>
  );
};

export default Wrapper;
