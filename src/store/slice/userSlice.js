import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../utils/helper";

import { createSlice } from "@reduxjs/toolkit";
import userServices from "../../services/user";

const initialState = {
  data: null,
  isLoading: false,
  success: false,
  message: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },

    setIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setMessage: (state, action) => {
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser, setIsLoading, setMessage } = userSlice.actions;

export const initializeUser = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    setMessage({
      message: null,
      success: false,
    });
    try {
      const user = (await getFromLocalStorage("user")) || null;


      dispatch(setUser(user));
    } catch (error) {
      dispatch(
        setMessage({
          message: error.response
            ? error.response.data && Object.values(error.response.data)[0]
            : "Something went wrong",
          success: false,
        })
      );
    }
    dispatch(setIsLoading(false));
  };
};

export const loginAUser = (user) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(
      setMessage({
        message: null,
        success: false,
      })
    );

    try {
      const response = await userServices.login(user);

      await removeFromLocalStorage("user");
      await setToLocalStorage("user", response);
      dispatch(setUser(JSON.stringify(response)));
    } catch (error) {
      dispatch(
        setMessage({
          message: error.response
            ? error.response.data && Object.values(error.response.data)[0]
            : "Something went wrong",
          success: false,
        })
      );
    }
    dispatch(setIsLoading(false));
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(
      setMessage({
        message: null,
        success: false,
      })
    );
    try {
      await removeFromLocalStorage("user");
      dispatch(setUser(null));
    } catch (error) {
      dispatch(
        setMessage({
          message: error.response
            ? error.response.data && Object.values(error.response.data)[0]
            : "Something went wrong",
          success: false,
        })
      );
    }
    dispatch(setIsLoading(false));
  };
};
