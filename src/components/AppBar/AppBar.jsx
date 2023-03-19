// import { useSelector } from 'react-redux';
// import authSelectors from 'redux/auth/auth-selectors';

import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import css from './AppBar.module.css';

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <header>
      <nav className={css.nav}>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </nav>
    </header>
  );
}
