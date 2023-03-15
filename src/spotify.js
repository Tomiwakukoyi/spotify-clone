// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
//The above link is the link to the documentation that contains all info well need

//we need an endpoint where well send the user to do their auth

export const authEndpoint = "https://accounts.spotify.com/authorize";

//next is the redirect uri, did this at the spotify developer setup
const redirectUri = "http://localhost:3000";

const clientId = "cf9d81992c2647eca6f6e40431b2ce6e";
