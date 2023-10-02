import { createSlice } from '@reduxjs/toolkit';
import { setCards } from '../setCards';

const initialState = {
  cards: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    [setCards.fulfilled]: (state, action) => {
      state.cards = action.payload;
      console.log(state.cards);
    },
    toggleFavorite: (state, action) => {
      const cardId = action.payload.id;
      const index = state.favorites.findIndex(
        favorite => favorite.id === cardId
      );

      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    resetCards: (state, action) => {
      state.favorites = [];
      localStorage.removeItem('favorites');
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
});

export const { toggleFavorite, resetCards, setSelectedBrand } =
  cardSlice.actions;

export const cardsReducer = cardSlice.reducer;
