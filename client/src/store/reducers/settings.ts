import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingState {
  displayLoginModal: boolean;
  displayLibraryCard: boolean;
  displayLoan: boolean;
}

const initialState: SettingState = {
  displayLoginModal: false,
  displayLibraryCard: false,
  displayLoan: false,
};

export const CommonSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDisplayLoginModal(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        displayLoginModal: action.payload,
      };
      return state;
    },
    setDisplayLibraryCard(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        displayLibraryCard: action.payload,
      };
      return state;
    },
    setDisplayLoan(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        displayLoan: action.payload,
      };
      return state;
    },
  },
});

export const { setDisplayLibraryCard, setDisplayLoan, setDisplayLoginModal } =
  CommonSlice.actions;

export default CommonSlice.reducer;
