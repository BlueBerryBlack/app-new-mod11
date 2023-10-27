import React from 'react';
import { useSelector } from 'react-redux';
import Card from './../Card/Card';
import styles from './CardFavorite.module.scss'
import { Navigate, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

const CardFavorite = props => {

  const navigate = useNavigate();

  const cards = useSelector(state => state.cards);
  const favoriteCards = cards.filter(card => card.isFavorite);

  useEffect( ()=>{  if (favoriteCards.length === 0 )
    navigate('/');},
    [navigate, favoriteCards]    
    )

  return (

    <div className={styles.column}>
      <ul className={styles.card}>
        {favoriteCards.map(card => (
          <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
        ))}
      </ul>
    </div>
  );
};

export default CardFavorite;