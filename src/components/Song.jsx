import React from "react";

const Song = ({ songInfo, isActive, onClick }) => {
    const duration = songInfo.duration;
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60);

    return (
        <div
            className={`song ${isActive ? " active" : ""}`}
            data-idx={songInfo._id}
            onClick={onClick}
        >
            <img src={songInfo.photo} alt="abc" className="song-profile" />
            <div className="song-info">
                <span className="song-name">{songInfo.title}</span>
                <span className="song-artist">{songInfo.artist}</span>
            </div>
            <span className="song-duration">{`${minutes}:${seconds}`}</span>
        </div>
    );
};

export default Song;
