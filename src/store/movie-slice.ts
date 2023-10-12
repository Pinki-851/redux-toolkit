import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MVProps {
  movieData: {};
  showData: {};
}

export const fetchAsyncMovieData: any = createAsyncThunk(
  "movie/fetchAsyncMovieData",
  async () => {
    try {
      let search = "harry";
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d6a0ac71&s=${search}&type=movie`,
        { method: "GET" }
      );
      const finalRes = await res.json();
      return finalRes;
    } catch (err) {
      console.log("err", err);
    }
  }
);
export const fetchAsyncShowData: any = createAsyncThunk(
  "movie/fetchAsyncShowData",
  async () => {
    try {
      let search = "friends";
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d6a0ac71&s=${search}&type=series`,
        { method: "GET" }
      );
      const finalRes = await res.json();
      return finalRes;
    } catch (err) {
      console.log("err", err);
    }
  }
);

const initialState: MVProps = {
  movieData: {},
  showData: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<{}>) => {
      console.log("actin", action);
      state.movieData = action.payload;
    },
  },

  extraReducers: {
    [fetchAsyncMovieData.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovieData.fulfilled]: (state, action) => {
      console.log("successfull");
      return { ...state, movieData: action?.payload };
    },
    [fetchAsyncMovieData.rejected]: () => {
      console.log("reject");
    },
    [fetchAsyncShowData.fulfilled]: (state, action) => {
      console.log("successfull");
      return { ...state, showData: action?.payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const movieSliceReducer = movieSlice.reducer;
