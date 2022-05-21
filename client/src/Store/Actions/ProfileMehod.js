import axios from "axios";
import { SET_PROFILE_ERRORS } from "../Constants/ProfileConstants";
import { SET_LOADER, CLOSE_LOADER } from "../Constants/AuthConstants";

export const addProfile = (profile) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post("/user/addProfile", profile, config);
      dispatch({ type: CLOSE_LOADER });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: SET_PROFILE_ERRORS,
        payload: error.response.data.errors,
      });
      console.log(error)
    }
  };
};
