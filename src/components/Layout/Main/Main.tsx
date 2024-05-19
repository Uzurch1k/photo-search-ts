import React from 'react';

import ScrollUp from '../../ScrollUp/ScrollUp';

import css from './Main.module.scss';

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className={css.main}>
      {children}
      <ScrollUp />
    </main>
  );
};

export default Main;
