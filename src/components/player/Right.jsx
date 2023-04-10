import { FaVolumeUp } from "react-icons/fa";
import { IconButtonDark } from "./IconButtons";
import VolumeSlider from "./VolumeSlider";
import { useState } from "react";

const Right = ({ playerRef }) => {
    const [volumeActive, setVolumeActive] = useState(false);
    const handleVolume = () => {
        setVolumeActive(true);
    };
    window.onclick = (e) => {
        if (
            !e.target.classList.contains("volume-bar-wrapper") &&
            !e.target.classList.contains("volume-button")
        ) {
            setVolumeActive(false);
        }
    };
    return (
        <div className="volume">
            <VolumeSlider
                playerRef={playerRef}
                isActive={volumeActive}
                handleActive={setVolumeActive}
            />
            <IconButtonDark className="volume-button" onClick={handleVolume}>
                <FaVolumeUp />
            </IconButtonDark>
        </div>
    );
};

export default Right;
