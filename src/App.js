import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./Context/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token } , dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'Set_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcXEKwCXG0CoN').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          dicover_weekly: response,
        })
    )
    }
  }, []);
  


  return <div className="">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
