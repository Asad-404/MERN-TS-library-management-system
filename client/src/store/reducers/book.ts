import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";
import axios from "axios";

interface BookState {
  loading: boolean;
  error: boolean;
  books: Book[];
}

const initialState: BookState = {
  loading: true,
  error: false,
  books: [],
};

export const fetchAllBooks = createAsyncThunk(
  "book/all",
  async (payload, thunkAPI) => {
    try {
      const req = await axios.get("http://localhost:3000/book");
      return req.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Pending logic
    builder.addCase(fetchAllBooks.pending, (state) => {
      state = {
        ...state,
        loading: true,
        error: false,
      };
      return state;
    });
    //fulfilled logic
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state = {
        ...state,
        books: action.payload,
        loading: false,
      };
      return state;
    });
  },
});

export const {} = BookSlice.actions;
export default BookSlice.reducer;
