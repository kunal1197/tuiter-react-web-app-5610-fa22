const profileReducer = (
  state = {
    name: "Elon Musk",
    handle: "Elon",
    profilePicture: "/tuiter/images/elon_musk.jpeg",
    bannerPicture: "/tuiter/images/starship.jpeg",
    bio: "founder, CEO, and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; founder of the Boring Company; co-founder of Neuralink and OpenAI; president of the Musk Foundation; and owner and CEO of Twitter, Inc.",
    website: "youtube.com/webtv",
    location: "Fremont, CA",
    dateOfBirth: "November 11, 1970",
    dateJoined: "May 2010",
    followingCount: 1000,
    followersCount: 100034,
    totalTweets: 4345,
  },
  action
) => {
  switch (action.type) {
    case "update-profile":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
