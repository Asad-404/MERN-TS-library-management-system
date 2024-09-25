import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Book,
  CheckInBookPayload,
  CheckoutBookPayload,
} from "../../models/Book";
import axios from "axios";
import { Pagination } from "../../models/Pagination";

interface BookState {
  loading: boolean;
  error: boolean;
  books: Book[];
  currentBook: Book | undefined;
  pagination: Pagination | null;
}

const initialState: BookState = {
  loading: true,
  error: false,
  books: [],
  currentBook: undefined,
  pagination: null,
};

export const fetchAllBooks = createAsyncThunk(
  "book/all",
  async (_, thunkAPI) => {
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

export const checkoutBook = createAsyncThunk(
  "book/checkout",
  async (payload: CheckoutBookPayload, thunkAPI) => {
    try {
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 14);
      const getPatron = await axios.get(
        `http://localhost:3000/card/${payload.libraryCard}`
      );
      const patronId = getPatron.data.data.id;

      const record = {
        status: "LOANED",
        loanedDate: new Date(),
        dueDate: returnDate,
        patron: patronId,
        employeeOut: payload.employee.id,
        item: payload.book.id,
      };

      const loanReq = await axios.post("http://localhost:3000/loan", record);
      const loan = loanReq.data.data;
      return loan;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkInBook = createAsyncThunk(
  "book/checkIn",
  async (payload: CheckInBookPayload, thunkAPI) => {
    try {
      const record = payload.book.records[0];
      const updatedRecord = {
        status: "AVAILABLE",
        loanedDate: record.loanedDate,
        dueDate: record.dueDate,
        returnedDate: new Date(),
        patron: record.patron,
        employeeOut: record.employeeOut,
        employeeIn: payload.employee.id,
        item: record.item,
        id: record._id,
      };

      const req = await axios.put("http://localhost:3000/loan", updatedRecord);

      return req.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setCurrentBook: (state, action: PayloadAction<Book | undefined>) => {
      state = {
        ...state,
        currentBook: action.payload,
      };
      return state;
    },
  },
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

    builder.addCase(checkoutBook.pending, (state) => {
      state = {
        ...state,
        loading: true,
      };
      return state;
    });

    builder.addCase(checkInBook.pending, (state) => {
      state = {
        ...state,
        loading: true,
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

    builder.addCase(checkoutBook.fulfilled, (state, action) => {
      let bookList: Book[] = JSON.parse(JSON.stringify(state.books));
      bookList = bookList.map((book) => {
        if (book.id === action.payload.item) {
          book.records = [action.payload, ...book.records];
          return book;
        }
        return book;
      });
      state = {
        ...state,
        books: bookList,
        loading: false,
      };
      return state;
    });

    builder.addCase(checkInBook.fulfilled, (state, action) => {
      let bookList: Book[] = JSON.parse(JSON.stringify(state.books));
      bookList = bookList.map((book) => {
        if (book.id === action.payload.item) {
          book.records.splice(0, 1, action.payload);
          return book;
        }
        return book;
      });
      state = {
        ...state,
        books: bookList,
        loading: false,
      };
      return state;
    });
  },
});

export const { setCurrentBook } = BookSlice.actions;
export default BookSlice.reducer;
