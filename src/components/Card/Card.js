import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

import styles from './Card.module.scss';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(props.id));
  };

  const buttonClasses = clsx(styles.icon, {
    [styles.liked]: isFavorite,
    [styles.notLiked]: !isFavorite,
  });

  return (
    <li className={styles.card}>
      {props.title}
      <div>
      <button onClick={handleLikeClick} className={buttonClasses}>
        {isFavorite ? '❤️' : '♡'}
      </button>
      <button onClick={handleRemoveClick} className={buttonClasses}>
      <span className='fa fa-trash'></span>
      </button>
      </div>
    </li>
  );
};

export default Card;