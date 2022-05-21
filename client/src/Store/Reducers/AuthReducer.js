import jwt_decode from "jwt-decode";
import {
  SET_LOADER,
  CLOSE_LOADER,
  SET_TOKEN,
  REGISTER_ERRORS,
  LOGOUT,
  LOGIN_ERRORS,
} from "../Constants/AuthConstants";

const initState = {
  loading: false,
  registerErrors: [],
  loginError: [],
  token: "",
  user: "",
};

const verifyToken = (token) => {
  const decodedToken = jwt_decode(token);
  const expiresIn = new Date(decodedToken.exp * 1000);
  if (new Date() > expiresIn) {
    localStorage.removeItem("userInfo");
    return null;
  } else {
    return decodedToken;
  }
};

const token = localStorage.getItem("userInfo");
if (token) {
  const decoded = verifyToken(token);
  if (decoded) {
    initState.token = token;
    const { user } = decoded;
    initState.user = user;
  }
}

const AuthReducer = (state = initState, action) => {
    const {type, payload} = action

  if (type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (type === REGISTER_ERRORS) {
    return { ...state, registerErrors: payload };
  } else if (type === SET_TOKEN) {
    const decoded = verifyToken(payload);
    const { user } = decoded;
    return {
      ...state,
      token: payload,
      user: user,
      loginError: [],
      registerErrors: [],
    };
  } else if (type === LOGOUT) {
    return { ...state, token: "", user: "" };
  } else if (type === LOGIN_ERRORS) {
    return { ...state, loginError: payload };
  } else {
    return state;
  }
};

export default AuthReducer;
