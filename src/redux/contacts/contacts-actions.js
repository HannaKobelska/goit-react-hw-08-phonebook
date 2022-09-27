import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from "notiflix";


export const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    Notify.failure("Error!", { position: 'right-bottom'});
  }
});


export const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    await axios.post('/contacts', contact);

    const { data } = await axios.get('/contacts');
    Notify.success("Contact was added!", { position: 'right-bottom'});
    return data;
  } catch (error) {
    Notify.failure("Error! Contact was NOT added!", { position: 'right-bottom'});
  }
});


export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);

    const { data } = await axios.get('/contacts');
    Notify.info("Deleted!", { position: 'right-bottom'});
    
    return data;
  } catch (error) {
    Notify.failure("Error!", { position: 'right-bottom'});
  }
});

export const filterContact = createAction('contacts/filter');