import { createAction } from '@reduxjs/toolkit';

export const fetchPhoneBookRequest = createAction(
  'contacts/fetchPhoneBookRequest'
);
export const fetchPhoneBookSuccess = createAction(
  'contacts/fetchPhoneBookSuccess'
);
export const fetchPhoneBookError = createAction('contacts/fetchPhoneBookError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess'
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
