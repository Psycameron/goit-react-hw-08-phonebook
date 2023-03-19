import React from 'react';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header>
      <nav className={css.nav}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </nav>
    </header>
  );
}
