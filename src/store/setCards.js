import { createAsyncThunk } from '@reduxjs/toolkit';
import { gethAdvertsFromMockAPI } from './gethAdvertsFromMockAPI';

export const setCards = createAsyncThunk('cards/setCards', async () => {
  try {
    const response = await gethAdvertsFromMockAPI();
    return response;
  } catch (error) {
    throw error;
  }
});
