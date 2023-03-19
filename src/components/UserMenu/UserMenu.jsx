import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
// import authSelectors from 'redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.selectUserName);
  // const avatar = ''

  return (
    <div>
      {/* <span>Welcome, {name}</span> */}
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
