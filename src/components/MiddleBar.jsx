import { useState } from "react";
import Songs from "./Songs";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/playerSlice";

const MiddleBar = () => {
    const dispatch = useDispatch();
    const currentPlaylist = useSelector(
        (state) => state.player.currentPlaylist
    );
    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };
    return (
        <div className="middle-bar">
            <div className="top">
                <span className="heading">{currentPlaylist.title}</span>
                <input
                    type="text"
                    className="search-box"
                    onChange={handleSearch}
                    placeholder="Search Song, Artist"
                />
            </div>

            <Songs />
        </div>
    );
};

export default MiddleBar;
