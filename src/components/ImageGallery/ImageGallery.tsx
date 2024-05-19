import { RefObject } from 'react';

import { ArrayItem } from '../App/AppProps';
import ImageCard from './ImageCard/ImageCard';

import css from './ImageGallery.module.scss';

type ImageGalleryProps = {
  arrayGallery: ArrayItem[];
  searchTerm: string;
  openModal: (url: string) => void;
  galleryRef: RefObject<HTMLUListElement>;
};

const ImageGallery = ({
  arrayGallery,
  searchTerm,
  openModal,
  galleryRef,
}: ImageGalleryProps) => {
  return (
    <section className={css.gallery}>
      {arrayGallery.length !== 0 ? (
        <h2 className={css.title}>{searchTerm}</h2>
      ) : null}
      <ul className={css.list} ref={galleryRef}>
        {arrayGallery.map(item => (
          <li key={item.id} className={css.item}>
            <ImageCard arrayItem={item} openModal={openModal} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageGallery;
