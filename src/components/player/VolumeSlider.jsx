import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVolume } from "../../redux/playerSlice";

const VolumeSlider = ({ playerRef, isActive }) => {
    const volume = useSelector((state) => state.player.volume);
    const dispatch = useDispatch();

    const handleVolumeProgress = (e) => {
        let currentVolume = Number(e.target.value);
        currentVolume = currentVolume / 100;
        playerRef.current.volume = currentVolume;
        dispatch(setVolume(currentVolume));
    };

    return (
        <div className={`volume-bar-wrapper ${isActive ? "active" : ""} `}>
            <input
                type="range"
                className="volume-bar"
                value={volume * 100}
                onChange={handleVolumeProgress}
                onClick={handleVolumeProgress}
            />
        </div>
    );
};

export default VolumeSlider;
