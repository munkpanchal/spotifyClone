import ProgressBar from "./ProgressBar";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudioProgress, setMobileCollapse } from "../../redux/playerSlice";
import { FaAngleDown } from "react-icons/fa";
import { IconButton } from "./IconButtons";

function Player() {
    const [song, setSong] = useState();
    const audioProgress = useSelector((state) => state.player.audioProgress);
    const currentSong = useSelector((state) => state.player.currentSong);
    const isPlaying = useSelector((state) => state.player.isPlaying);
    const volume = useSelector((state) => state.player.volume);

    const playerRef = useRef(null);
    const dispatch = useDispatch();

    const mobileCollapse = useSelector((state) => state.player.mobileCollapse);

    const handleTimeUpdate = () => {
        let time = playerRef.current.currentTime;
        dispatch(setAudioProgress(time));
    };

    const handleMobileCollapse = () => {
        console.log(mobileCollapse);
        let newMobileCollapse = !mobileCollapse;
        console.log(newMobileCollapse);
        dispatch(setMobileCollapse(newMobileCollapse));
    };

    const handleMobileClick = (e) => {
        if (!mobileCollapse) {
            if (!e.target.classList.contains("icon-button")) {
                dispatch(setMobileCollapse(true));
            }
        }
    };

    useEffect(() => {
        setSong(currentSong.url);

        playerRef.current.currentTime = 0;
    }, [currentSong]);

    return (
        <div className="player" onClick={handleMobileClick}>
            <div className="song-info">
                <h2 className="heading">{currentSong.title}</h2>
                <p className="song-info-artist">{currentSong.artist}</p>
                <span className="collapse">
                    <IconButton onClick={handleMobileCollapse}>
                        <FaAngleDown />
                    </IconButton>
                </span>
            </div>
            <div className="song-profile">
                <img
                    src={currentSong.photo}
                    className="song-profile-photo"
                    alt=""
                />
            </div>
            <div className="song-controls">
                <ProgressBar playerRef={playerRef} />
                <audio
                    style={{ display: "none" }}
                    ref={playerRef}
                    controls
                    autoPlay={isPlaying ? true : false}
                    src={song}
                    volume={volume}
                    onTimeUpdate={handleTimeUpdate}
                />
                <div className="wrapper">
                    <Left />
                    <Middle playerRef={playerRef} />
                    <Right playerRef={playerRef} />
                </div>
            </div>
        </div>
    );
}

export default Player;
