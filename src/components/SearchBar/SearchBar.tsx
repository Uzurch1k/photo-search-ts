import { FormEvent } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';

import github from '/src/img/git-hub.jpg';
import css from './SearchBar.module.scss';

type SearchBarProps = {
  onSearch: (search: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const notify = () => toast.error('Enter text to search!');

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const search = (
      form.elements as HTMLFormControlsCollection & { search: HTMLInputElement }
    ).search.value;

    if (search.trim() === '') {
      notify();
      form.reset();
      return;
    }

    onSearch(search);
    form.reset();
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.body}>
          <h1 className={css.title}>Photo Search</h1>
          <form onSubmit={handleSubmit} className={css.form}>
            <input
              className={css.input}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search photos"
            />
            <button className={css.btn} type="submit">
              <GoSearch />
            </button>
          </form>
          <a
            className={css.link}
            href="https://github.com/Uzurch1k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </header>
  );
};

export default SearchBar;
