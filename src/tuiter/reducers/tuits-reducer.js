// import tuits from "../data/tuits.json";
import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

// const currentUser = {
//   userName: "NASA",
//   handle: "@nasa",
//   avatarIcon: "nasa_logo.png",
// };

const templateTuit = {
  postedBy: {
    username: "NASA",
  },
  verified: false,
  handle: "@nasa",
  tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  logoImage: "/tuiter/images/elon_musk.jpeg",
  avatarImage: "/tuiter/images/elon_musk.jpeg",
  tuits: "122K",
  stats: {
    comments: 0,
    retuits: 0,
    likes: 0,
    dislikes: 0,
  },
  topic: "Space",
  time: "2h",
  liked: false,
  disliked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
  dislikes: 0,
};

// const tuitsSlice = createSlice({
//   name: "tuits",
//   initialState: tuits,
//   reducers: {
//     createTuit(state, action) {
//       state.unshift({
//         ...templateTuit,
//         ...action.payload,
//         _id: new Date().getTime(),
//       });
//     },

//     deleteTuit(state, action) {
//       const index = state.findIndex((tuit) => tuit._id === action.payload);
//       state.splice(index, 1);
//     },

//     likeTuit(state, action) {
//       const post = state.find((post) => post._id === action.payload._id);
//       post.liked = !post.liked;

//       if (post.liked) {
//         post.stats.likes++;
//       } else {
//         post.stats.likes--;
//       }
//     },
//   },
// });

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state) => {
      state.loading = false;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload._id);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      console.log("createTuitThunk.fulfilled", payload);
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...templateTuit,
        ...action.payload,
        _id: new Date().getTime(),
      });
    },

    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },

    likeTuit(state, action) {
      const post = state.find((post) => post._id === action.payload._id);
      post.liked = !post.liked;

      if (post.liked) {
        post.stats.likes++;
      } else {
        post.stats.likes--;
      }
    },
  },
});

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
