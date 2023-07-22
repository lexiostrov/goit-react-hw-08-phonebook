import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, fetchDelContacts, fetchAdContacts } from './option';

const AddContactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDelContacts.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.error = null;
    },
    [fetchDelContacts.rejected](state, action) {
      state.error = action.payload;
    },

    [fetchAdContacts.fulfilled](state, action) {
      state.items.push(action.payload);
      state.error = null;
    },
    [fetchAdContacts.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = AddContactsSlice.actions;
export const contactsReducer = AddContactsSlice.reducer;
