import React, { useState } from "react";

const VolumeSlider = ({ playerRef, isActive, setVolumeActive }) => {
    const [volume, setVolume] = useState(75);
    const handleVolumeProgress = (e) => {
        playerRef.current.volume = volume / 100;
        setVolume(Number(e.target.value));
    };

    return (
        <div className={`volume-bar-wrapper ${isActive ? "active" : ""} `}>
            <input
                type="range"
                className="volume-bar"
                value={volume}
                onChange={handleVolumeProgress}
                onClick={handleVolumeProgress}
            />
        </div>
    );
};

export default VolumeSlider;
