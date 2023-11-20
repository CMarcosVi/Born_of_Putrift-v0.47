// store/inventorySlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Funções auxiliares para leitura e gravação no localStorage
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
    // Lidar com erros, se necessário
  }
};

const initialState = loadState() || {
  items: [],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log('Adicionando item:', newItem);
      // Verificar se o item já está no inventário
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
export default inventorySlice.reducer;
