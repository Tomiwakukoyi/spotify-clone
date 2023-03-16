import React from "react";
import Header from "./header/Header";
import "./Body.css";
import { useDataLayerValue } from "../../DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import SongRow from "./songrow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body ">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs"></div>
      <div className="body__icons">
        <PlayCircleFilledIcon className="body__shuffle" />
        <FavoriteIcon fontSize="large" />
        <MoreHoriz />
      </div>

      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
    </div>
  );
};

export default Body;
