import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
