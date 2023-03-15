import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //this is basically giving spotify your access token
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //the dispatch is sending the user to the datalayer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists(user).then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
