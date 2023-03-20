import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchPhoneBookError,
  fetchPhoneBookRequest,
  fetchPhoneBookSuccess,
} from './phoneBook-actions';
// import {
//   fetchContactsError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
// } from './actions';

// export const fetchPhoneBook = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const data = await axios.get('/contacts');
//       token.set(data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchPhoneBook = () => async dispatch => {
  dispatch(fetchPhoneBookRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchPhoneBookSuccess(data));
  } catch (error) {
    dispatch(fetchPhoneBookError(error.message));
  }
};

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const data = await axios.post('/contacts', contact);
//       token.set(data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const addContact = (name, number) => dispatch => {
  const newContact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => {
      dispatch(addContactError(error.message));
    });
};

// export const addContact = createAsyncThunk(
//   'tasks/addTask',
//   async (contact, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await axios.delete(`/contacts/${contactId}`);
//       token.set(data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// const fetchContact = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

// const AddContact = () => async dispatch => {
//   const contact = {
//     name,
//     phone,
//   };

//   dispatch(addContact());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };
