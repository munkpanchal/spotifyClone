import React, { useEffect, useRef, useState } from "react";
import { IconButtonWhite } from "./IconButtons";
import { useDispatch, useSelector } from "react-redux";
import {
    setAudioProgress,
    setMobileCollapse,
    setPlayPause,
} from "../../redux/playerSlice";
import { FaPause, FaPlay } from "react-icons/fa";

const MobilePlayer = () => {
    const [song, setSong] = useState();
    const dispatch = useDispatch();
    const playerRef = useRef(null);

    const isPlaying = useSelector((state) => state.player.isPlaying);
    const currentSong = useSelector((state) => state.player.currentSong);

    const handlePlayPause = () => {
        let action = !isPlaying;
        isPlaying ? playerRef.current.pause() : playerRef.current.play();
        dispatch(setPlayPause(action));
    };

    const handleTimeUpdate = () => {
        let time = playerRef.current.currentTime;
        dispatch(setAudioProgress(time));
    };

    const handleMobileClick = (e) => {
        if (!e.target.classList.contains("icon-button")) {
            dispatch(setMobileCollapse(true));
        }
    };

    useEffect(() => {
        setSong(currentSong.url);
        playerRef.current.currentTime = 0;
    }, [currentSong]);

    return (
        <div className="mobile-player" onClick={handleMobileClick}>
            <div className="song-profile">
                <img
                    src={currentSong.photo}
                    className="song-profile-photo"
                    alt=""
                />
            </div>
            <div className="song-info">
                <div className="wrapper">
                    <h2 className="heading">{currentSong.title}</h2>
                </div>
                <p className="song-info-artist">{currentSong.artist}</p>
                <audio
                    style={{ display: "none" }}
                    ref={playerRef}
                    controls
                    autoPlay={isPlaying ? true : false}
                    src={song}
                    onTimeUpdate={handleTimeUpdate}
                />
            </div>
            <div className="play-pause">
                <IconButtonWhite
                    className="play-button"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </IconButtonWhite>
            </div>
        </div>
    );
};

export default MobilePlayer;
