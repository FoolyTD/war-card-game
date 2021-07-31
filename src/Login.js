import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
// dispatch helper allows us to dipatch actions to the store (big pile of user info)
// selector helper allows us to select items from the store
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../auth/userSlice";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Header>
    {!userName ? (
        'This is the login page.'
        <button onClick={handleAuth}>LOGIN</button>
      ) : (
        <>
          <NavMenu>
          go to game board page
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Header>
  );
};

export default Login;
