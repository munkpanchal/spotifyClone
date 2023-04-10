import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";
import { IconButton, IconButtonWhite } from "./IconButtons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setPlayPause } from "../../redux/playerSlice";
import { useState } from "react";

const Middle = ({ playerRef }) => {
    const dispatch = useDispatch();
    const isPlaying = useSelector((state) => state.player.isPlaying);
    const allSongs = useSelector((state) => state.player.allSongs);
    const currentSong = useSelector((state) => state.player.currentSong);

    const handlePlayPause = () => {
        let action = !isPlaying;
        isPlaying ? playerRef.current.pause() : playerRef.current.play();
        dispatch(setPlayPause(action));
    };
    const handleNext = () => {
        const currentSongIndex = allSongs.findIndex(
            (val) => val._id === currentSong._id
        );
        if (currentSongIndex !== -1) {
            const nextSong = allSongs[currentSongIndex + 1];
            dispatch(setCurrentSong(nextSong));
            dispatch(setPlayPause(true));
        }
    };
    const handlePrev = () => {
        const currentSongIndex = allSongs.findIndex(
            (val) => val._id === currentSong._id
        );
        if (currentSongIndex > 0 && currentSongIndex < allSongs.length - 1) {
            if (allSongs) {
                const prevSong = allSongs[currentSongIndex - 1];
                dispatch(setCurrentSong(prevSong));
                dispatch(setPlayPause(true));
            }
        }
    };

    return (
        <div className="middle">
            <IconButton className="prev-button" onClick={handlePrev}>
                <FaBackward />
            </IconButton>
            <IconButtonWhite className="play-button" onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </IconButtonWhite>
            <IconButton className="next-button" onClick={handleNext}>
                <FaForward />
            </IconButton>
        </div>
    );
};

export default Middle;
