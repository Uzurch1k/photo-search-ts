import React from 'react';

import css from './Section.module.scss';

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <section className={css.section}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
