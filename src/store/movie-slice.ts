import { API_KEY, API_URL } from "@/components/constants/varible";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MVProps {
  movieData: {};
  showData: {};
  showAndMovieDetails: {};
  loading: boolean;
}

export const fetchAsyncMovieData: any = createAsyncThunk(
  "movie/fetchAsyncMovieData",
  async (searchKey: string) => {
    try {
      const res = await fetch(
        `${API_URL}?i=tt3896198&apikey=${API_KEY}&s=${searchKey}&type=movie`,
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
  async (searchKey: string) => {
    try {
      const res = await fetch(
        `${API_URL}?i=tt3896198&apikey=${API_KEY}&s=${searchKey}&type=series`,
        { method: "GET" }
      );
      const finalRes = await res.json();
      return finalRes;
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const fetchAsyncMovieDetails: any = createAsyncThunk(
  "movie/fetchAsyncMovieDetails",
  async (id: number | string) => {
    try {
      const res = await fetch(
        `${API_URL}?apikey=${API_KEY}&i=${id}&Plot=full`,
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
  showAndMovieDetails: {},
  loading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<{}>) => {
      state.movieData = action.payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.showAndMovieDetails = {};
    },
  },

  extraReducers: (builder) => {
    // [fetchAsyncMovieData.pending]: (state) => {
    //   return { ...state, loading: true };
    // },
    // [fetchAsyncMovieData.fulfilled]: (state, action) => {
    //   return { ...state, movieData: action?.payload };
    // },
    // [fetchAsyncMovieData.rejected]: () => {},
    // [fetchAsyncShowData.fulfilled]: (state, action) => {
    //   return { ...state, loading: false, showData: action?.payload };
    // },
    // [fetchAsyncMovieDetails.fulfilled]: (state, action) => {
    //   return { ...state, showAndMovieDetails: action?.payload };
    // },
    builder.addCase(fetchAsyncMovieData.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchAsyncMovieData.fulfilled, (state, action) => {
      console.log("fullfill", state.movieData, action);
      return { ...state, movieData: action?.payload, loading: false };
    });
    builder.addCase(fetchAsyncShowData.fulfilled, (state, action) => {
      return { ...state, loading: false, showData: action?.payload };
    });
    builder.addCase(fetchAsyncMovieDetails.fulfilled, (state, action) => {
      return { ...state, showAndMovieDetails: action?.payload };
    });
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const movieSliceReducer = movieSlice.reducer;
