import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

interface Coctail {
  idDrink: string;
  strDrink: string;
}

export const coctailSlice = createSlice({
  name: "coctails",
  initialState: {
    coctails: [] as Coctail[],
    loading: false,
    error: null,
  },
  reducers: {
    addOne: (state) => {
      state.loading = true;
    },
    addOneSuccess: (state, action: PayloadAction<Coctail>) => {
      state.coctails.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addOneFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteOne: (state, action: PayloadAction<Coctail>) => {
      state.coctails = state.coctails.filter(
        (coctail) => coctail.idDrink !== action.payload.idDrink
      );
    },
    deleteAll: (state) => {
      state.coctails = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { addOne, addOneSuccess, addOneFailure, deleteOne, deleteAll } =
  coctailSlice.actions;

export const fetchCoctail = () => async (dispatch: Dispatch) => {
  dispatch(addOne());
  setTimeout(async() => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      dispatch(addOneSuccess(response.data.drinks[0]));
    } catch (error) {
      const typedError = error as Error;
      dispatch(addOneFailure(typedError?.message));
    }
  }, 500);
};

export default coctailSlice.reducer;
