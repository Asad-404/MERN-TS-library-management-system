import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";
import axios from "axios";
import { Pagination } from "../../models/Pagination";

interface BookState {
  loading: boolean;
  error: boolean;
  books: Book[];
  pagination: Pagination | null;
}

const initialState: BookState = {
  loading: true,
  error: false,
  books: [],
  pagination: null,
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

export const queryBooks = createAsyncThunk(
  "book/query",
  async (payload: string, thunkAPI) => {
    try {
      const req = await axios.get(`http://localhost:3000/book/query${payload}`);
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
        books: [],
        loading: true,
        error: false,
      };
      return state;
    });

    builder.addCase(queryBooks.pending, (state) => {
      state = {
        ...state,
        books: [],
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

    builder.addCase(queryBooks.fulfilled, (state, action) => {
      state = {
        ...state,
        books: action.payload.items,
        pagination: {
          totalCount: action.payload.totalCount,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          pageCount: action.payload.pageCount,
          limit: action.payload.limit,
        },
        loading: false,
      };
      return state;
    });
  },
});

export const {} = BookSlice.actions;
export default BookSlice.reducer;
