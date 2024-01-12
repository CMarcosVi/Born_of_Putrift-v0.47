import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('inventoryState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('inventoryState', serializedState);
  } catch (err) {
  }
};

const initialState = loadState() || {
  items: [],
};

const hasChaveCarro = (state) => {
  console.log('Inventário:', state.items);
  const temChaveCarro = state.items.some(item => item.id === 1);
  console.log('Tem Chave do Carro:', temChaveCarro);
  return temChaveCarro;
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log('Adicionando item:', newItem);
      if (!state.items.some(item => item.id === newItem.id)) {
        state.items.push(newItem);
        saveState(state);
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      saveState(state);
    },
  },
});

export const { addItem, removeItem } = inventorySlice.actions;
export { hasChaveCarro };
export default inventorySlice.reducer;