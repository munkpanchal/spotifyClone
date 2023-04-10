import { useState } from "react";
import Songs from "./Songs";
import { useSelector } from "react-redux";

const MiddleBar = () => {
    const [inp, setInp] = useState("");
    const currentPlaylist = useSelector(
        (state) => state.player.currentPlaylist
    );
    const handleSearch = (e) => {
        setInp((val) => (val = e.target.value));
        console.log(inp);
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

            <Songs searchInp={inp} />
        </div>
    );
};

export default MiddleBar;
