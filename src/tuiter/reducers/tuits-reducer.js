// import tuits from "../data/tuits.json";
// import { createSlice } from "@reduxjs/toolkit";

// const currentUser = {
//   userName: "NASA",
//   handle: "@nasa",
//   avatarIcon: "nasa_logo.png",
// };

// const templateTuit = {
//   ...currentUser,
//   topic: "Space",
//   time: "2h",
//   liked: false,
//   replies: 0,
//   retuits: 0,
//   likes: 0,
// };

// const tuitsSlice = createSlice({
//   name: "tuits",
//   initialState: tuits,
//   reducers: {
//     createTuit(state, action) {
//       state.unshift({
//         ...action.payload,
//         ...templateTuit,
//         _id: new Date().getTime(),
//       });
//       console.log("templateTuit", templateTuit);
//     },

//     deleteTuit(state, action) {
//       const index = state.findIndex((tuit) => tuit._id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });
// export const { createTuit, deleteTuit } = tuitsSlice.actions;
// export default tuitsSlice.reducer;

import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case "create-tuit":
      const newTuit = {
        tuit: action.tuit,
        _id: new Date().getTime() + "",
        postedBy: {
          username: "ReactJS",
        },
        stats: {
          retuits: 111,
          likes: 222,
          replies: 333,
        },
      };
      return [newTuit, ...state];
    case "delete-tuit":
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });

    default:
      return tuits;
  }
};

export default tuitsReducer;
