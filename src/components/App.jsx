import { Routes, Route } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from './NotFound/NotFound';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <ContactForm />
      <Filter />
      <ContactList /> */}
    </div>
  );
};
