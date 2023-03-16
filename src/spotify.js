// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
//The above link is the link to the documentation that contains all info well need

//we need an endpoint where well send the user to do their auth

export const authEndpoint = "https://accounts.spotify.com/authorize";

//A redirect URI is the loaction where a user will be directed to after successful login or after successfull authentication
//next is the redirect uri, did this at the spotify developer setup
const redirectUri = "http://spotify-clone-eight-rust.vercel.app/";
//gotten from the dashboard
const clientId = "975c95b0a3ee4e50b01fe999d14823b6";

//scopes is basically giving the user permission to do things
// soo they can play music, check recently played, allow user playback
const scopes = [
  "playlist-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//access token
//This code snnippet can be used to pull code off from URL
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#acesssToken=mysupersecretkey&name=tommy, what the code means is to
      //take the returned URI and split it at &
      //and then the reduce function furder splits it from the = sign again
      // then initial which is like another array will grab the first element from parts
      //and then decode it
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {}); // this goes to the LoginUrl then goes where we have a hash
};
/////////////////////////////////////////////////

//making the login url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`; //itll go through the scopes and join an ASCII code, the one for space which is %20 so itll go  through the scopes and add the ascii space characters
//once i get  authenticated, give me back a string, thats what the token means
