import { addContact, deleteContact, filterContact, getContacts } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


const itemReducer = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterContact.type]: (_, { payload }) => payload,
});

const errorReducer = createReducer('', {
  [getContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [getContacts.pending]: () => '',
  [addContact.pending]: () => '',
  [deleteContact.pending]: () => '',
});

const loadingReducer = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});