import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchUserPayload,
  LoginUserPayload,
  RegisterUserPayload,
  User,
} from "../../models/User";
import axios from "axios";

interface AuthState {
  loggedInUser: User | undefined;
  profileUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthState = {
  loggedInUser: undefined,
  profileUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: LoginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:3000/auth/login", user);
      return req.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:3000/auth/register", user);
      return req.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetch",
  async (payload: FetchUserPayload, thunkAPI) => {
    try {
      const req = await axios.get(
        `http://localhost:3000/users/${payload.userId}`
      );
      const user = req.data.data;
      return {
        user,
        property: payload.property,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/update",
  async (payload: User, thunkAPI) => {
    try {
      const req = await axios.put("http://localhost:3000/users", payload);
      return req.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegisterSuccess: (state) => {
      state = {
        ...state,
        registerSuccess: false,
      };
      return state;
    },
    resetUser: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        [action.payload]: undefined,
      };
      return state;
    },
  },
  extraReducers: (builder) => {
    //Pending logic
    builder.addCase(loginUser.pending, (state) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });

    builder.addCase(registerUser.pending, (state) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });

    builder.addCase(fetchUser.pending, (state) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });

    builder.addCase(updateUser.pending, (state) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });

    // Resolved logic
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        loggedInUser: action.payload,
      };
      return state;
    });

    builder.addCase(registerUser.fulfilled, (state) => {
      state = {
        ...state,
        loading: false,
        registerSuccess: true,
      };
      return state;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state = {
        ...state,
        [action.payload.property]: action.payload.user,
        loading: false,
      };
      return state;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state = {
        ...state,
        profileUser: action.payload,
        loggedInUser: action.payload,
        loading: false,
      };
      return state;
    });

    // Rejected logic
    builder.addCase(loginUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };
      return state;
    });

    builder.addCase(registerUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };
      return state;
    });

    builder.addCase(fetchUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };
      return state;
    });

    builder.addCase(updateUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };
      return state;
    });
  },
});

export const { resetRegisterSuccess, resetUser } = AuthSlice.actions;

export default AuthSlice.reducer;
