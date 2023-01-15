import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  registered: false,
  isLoading: false,
  //   accesssToken: localStorage.getItem("token"),
  authenticated: false,
  user: null,
  error: null,
  otp: null,
  // buyerId: null,
};
// SEND OTP

const sendOtpRequest = async (number) => {
  const response = await axios.post(
    "https://atoovis77.herokuapp.com/api/v1/otp",
    number
  );
  console.log(response);
  if (response.ok) return response.data.message;
};
export const sendOtp = createAsyncThunk(
  "send otp",
  async (number, thunkAPI) => {
    try {
      return await sendOtpRequest(number);
    } catch (err) {
      console.log(err);
      thunkAPI.rejectWithValue(err);
    }
  }
);

/// REGISTER BUYER
const createBuyer = async (data) => {
  const response = await axios.post(
    "https://atoovis77.herokuapp.com/api/v1/auth/buyer/signup",
    data
  );

  console.log(response.data);
  if (response.ok) return response.data;
};
export const registerBuyer = createAsyncThunk(
  "create a new buyer",
  async (data, thunkAPI) => {
    try {
      return await createBuyer(data);
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
// LOGIN BUYER
const loginBuyerAPI = async (data) => {
  const response = await axios.post(
    "https://atoovis77.herokuapp.com/api/v1/auth/login",
    data
  );
  console.log(response.data);
  return response.data;
};
export const loginBuyer = createAsyncThunk("login the buyer", async (data) => {
  try {
    const userData = await loginBuyerAPI(data);
    console.log(userData);
    return userData;
  } catch (err) {
    console.log(err);
    thunkAPI.rejectWithValue(data);
  }
});
export const buyerSlice = createSlice({
  name: "buyers",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerBuyer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerBuyer.fulfilled, (state) => {
        state.registered = true;
        state.isLoading = false;
      })
      .addCase(registerBuyer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginBuyer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginBuyer.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginBuyer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.otp = action.payload;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default buyerSlice.reducer;

// Action creators are generated for each case reducer function
// export const {
//   loginFail,
//   loginStart,
//   signupFail,
//   signupStart,
//   signupSucces,
//   loginSuccess,
// } = buyerSlice.actions;

// signupStart: (state) => {
//   state.isLoading = true;
// },
// signupSucces: (state, action) => {
//   state.registered = true;
//   state.isLoading = false;
// },
// signupFail: (state, action) => {
//   state.error = action.error;
//   state.isLoading = false;
// },
// loginStart: (state) => {
//   state.isLoading = true;
// },
// loginSuccess: (state, action) => {
//   state.buyerId = action.Id;
//   state.isLoading = false;
// },
// loginFail: (state, action) => {
//   state.isLoading = false;
//   state.error = action.error;
// },
