import axios from "axios";
import {
  SET_LOADER,
  CLOSE_LOADER,
  SET_TOKEN,
  REGISTER_ERRORS,
  LOGIN_ERRORS,
} from "../Constants/AuthConstants";

export const register = (user) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post("/user/register", user, config);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("userInfo", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: REGISTER_ERRORS,
        payload: error.response.data.errors,
      });
      console.log(error)
    }
  };
};

export const login = (user) =>{
    return async (dispatch) =>{
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        dispatch({type: SET_LOADER})
        const {data} = await axios.post('/user/login', user, config)
        dispatch({type: CLOSE_LOADER})
        localStorage.setItem('userInfo', data.token)
        dispatch({ type: SET_TOKEN, payload: data.token });
      } catch (error) {
        dispatch({ type: CLOSE_LOADER });
        dispatch({
          type: LOGIN_ERRORS,
          payload: error.response.data.errors,
        });
      }
    }
  }