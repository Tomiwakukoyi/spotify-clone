export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCL4_lr8V_us0zZomD-kPJeU0Eob_6LlDyNwaRb7G7b4e1FSQchXSvQzUKakCaO03yzGpZdWUT_sPx0xnVObePwr_U0RGmy8Bcmxywdpb79o3RacU2n-OmAXP7zfz7zG5L_7EbkVJunqZCpv5mC_jy239SaYlEEZhDCaMcaQd7ygwhoGhXDPX0DhqKwyk68hV8f8Y16VHzVnCUv03iZHw",

  token: null,
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
    default:
      return state; //if nothing happens return the original state
  }
};

export default reducer;
