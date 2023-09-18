import React, { useEffect } from 'react';
import { StyledSidebar } from './Sidebar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { resetCards } from '../../src/store/slices/cardsSlice';
import { resetCards } from '../../src/store/store';

const Sidebar = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.cards.favorites);

  const handleDelete = async e => {
    e.preventDefault();
    dispatch(resetCards());
  };

  return (
    <StyledSidebar>
      {favorites.length > 0 && (
        <Button onClick={handleDelete}>Delete all</Button>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        porro ut at! At est unde ullam libero, voluptatem laboriosam dolorum.
      </p>
    </StyledSidebar>
  );
};

export default Sidebar;
