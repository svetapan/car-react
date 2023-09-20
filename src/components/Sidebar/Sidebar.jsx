import React from 'react';
import { StyledSidebar } from './Sidebar.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetCards } from '../../store/store';

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
        <Button onClick={handleDelete} style={{ marginBottom: '20px' }}>
          Delete all
        </Button>
      )}
      <p style={{ textIndent: '20px' }}>
        This is a convenient application designed for those who search and
        compare car rental offers. Our application facilitates the process of
        choosing and booking a car by providing a wide selection of cars of
        various brands and models.
      </p>
    </StyledSidebar>
  );
};

export default Sidebar;
