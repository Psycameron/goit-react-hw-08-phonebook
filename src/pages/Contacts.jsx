import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import React from 'react';

export default function Contacts() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
