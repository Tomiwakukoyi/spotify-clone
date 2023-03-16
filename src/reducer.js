export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  token: null,
  // token:
  //   "BQC8HPySxsi62izCPC7sa7RJuBhPp3UnAqzPu3Wv7o_bhy0CnkW2bJ68fKVjMeorJkuAe8flo6fx-AHy3uh6TIlpVCGi6fNAMsqufJ1V1NpU_rBoIFrChfa85O5NIeRmRAGqSueBvnkmBjMEfv0cDmg0eH4Lzr7JByDIB-pJYILhcax_oVYRRFpucIYrvL7KZ1zw_HDQ-LBvv27H4lGgobNNq4Z2-Vn97C7R",
};

//state is what it currently looks like
//action is what we do to alter it
const reducer = (state, action) => {
  console.log(action);

  //Action ->type , [payload]
  switch (action.type) {
    case "SET_USER": //set user is the type //the reducer just listens to actions
      return {
        ...state,
        user: action.user, //the new state now keeps whatever is in the current state then update it with
        //whatever the action was .user//therefore action type is SetUser and payload is user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state; //if nothing happens return the original state
  }
};

export default reducer;
