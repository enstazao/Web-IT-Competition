import { SET_PROFILE_ERRORS } from "../Constants/ProfileConstants";

const initialState = {
  profileErrors: [],
};

export const addProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_PROFILE_ERRORS) {
    return { ...state, profileErrors: payload };
  } else {
    return state;
  }
  
};
