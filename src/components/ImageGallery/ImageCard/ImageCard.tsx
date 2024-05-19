import { ArrayItem } from '../ImageProps';

import { FaUser } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

import css from './ImageCard.module.scss';

type ImageCardProps = {
  arrayItem: Omit<ArrayItem, 'id'>;
  openModal: (regular: string) => void;
};

const ImageCard = ({ arrayItem, openModal }: ImageCardProps) => {
  const { urls, user, likes, description } = arrayItem;
  const { name, instagram_username, twitter_username } = user;
  const { small, regular } = urls;

  const handleClick = () => {
    openModal(regular);
  };

  return (
    <div className={css.body}>
      <img src={small} alt={description} onClick={handleClick} />
      <div className={css.info}>
        <ul className={css.list}>
          <li className={css.item}>
            <FaUser /> <p>{name}</p>
          </li>
          {twitter_username && (
            <li className={css.item}>
              <FaInstagram /> <p>{instagram_username}</p>
            </li>
          )}
          {twitter_username && (
            <li className={css.item}>
              <FaTwitter />
              <p>{twitter_username}</p>
            </li>
          )}
          {likes && (
            <li className={css.item}>
              <AiFillLike /> <p>{likes}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
