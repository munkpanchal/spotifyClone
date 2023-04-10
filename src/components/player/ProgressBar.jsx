import { useSelector, useDispatch } from "react-redux";
import { setAudioProgress } from "../../redux/playerSlice";

const ProgressBar = ({ playerRef }) => {
    const audioProgress = useSelector((state) => state.player.audioProgress);

    const songInfo = useSelector((state) => state.player.currentSong);
    const dispatch = useDispatch();
    const handleAudioProgress = (e) => {
        let completDuration = songInfo.duration;
        let currentTiming = Number(e.target.value);
        playerRef.current.currentTime = currentTiming;
        dispatch(setAudioProgress(currentTiming));
    };

    return (
        <input
            type="range"
            className="progress-bar"
            value={audioProgress}
            onChange={handleAudioProgress}
            onClick={handleAudioProgress}
            min={0}
            max={songInfo.duration}
        />
    );
};

export default ProgressBar;
