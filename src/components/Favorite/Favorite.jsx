import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../store/store';
import CardItem from '../CardItem/CardItem';
import { CardsGroup, FavoriteSection } from './Favorite.styled';
import Sidebar from 'Sidebar/Sidebar';

const Favorite = () => {
  const favorites = useSelector(state => state.cards.favorites);
  const dispatch = useDispatch();

  function getCardById(id) {
    return favorites.find(favorite => favorite.id === id);
  }

  const handleHeartClick = id => {
    const index = favorites.indexOf(id);
    const favCard = getCardById(id);

    if (index === -1) {
      dispatch(toggleFavorite(favCard));
    }
  };

  return (
    <FavoriteSection>
      <Sidebar />
      <CardsGroup>
        {favorites.map(favorite => (
          <CardItem
            key={favorite.id}
            advert={favorite}
            favorites={favorites}
            handleHeartClick={handleHeartClick}
          />
        ))}
      </CardsGroup>
    </FavoriteSection>
  );
};

export default Favorite;
