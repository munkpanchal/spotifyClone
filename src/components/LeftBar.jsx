import imgSrc from "../images/logo.svg";
import profileImgSrc from "../images/profile.png";
import Playlist from "../components/Playlist";

const LeftBar = () => {
    return (
        <div className="left-bar">
            <div className="top">
                <div className="logo">
                    <img src={imgSrc} alt="logo" />
                </div>
                <Playlist />
            </div>
            <figure className="bottom">
                <img src={profileImgSrc} alt="profile" />
            </figure>
        </div>
    );
};

export default LeftBar;
