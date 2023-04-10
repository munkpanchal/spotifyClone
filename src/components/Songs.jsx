import Song from "./Song";
import { getSongs } from "../graphql/getSongs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setPlayPause } from "../redux/playerSlice";
import Loader from "./Loader";

const Songs = ({ searchInp }) => {
    const dispatch = useDispatch();

    const currentPlaylist = useSelector(
        (state) => state.player.currentPlaylist.id
    );
    const currentSong = useSelector((state) => state.player.currentSong);

    const { error, loading, data } = getSongs(currentPlaylist);
    if (loading) {
        return <Loader />;
    }
    if (data) {
        let allSongs = data.getSongs;
        if (searchInp) {
            allSongs = allSongs.filter((val) => {
                if (
                    val.artist.toLowerCase().includes(searchInp) ||
                    val.title.toLowerCase().includes(searchInp) ||
                    val.artist.toLocaleLowerCase().includes(searchInp) ||
                    val.title.toLocaleLowerCase().includes(searchInp)
                ) {
                    return val;
                }
            });
            console.log(allSongs);
        }

        const handleCurrentSong = (e) => {
            let currentSongId = e.target.getAttribute("data-idx");

            let currentSongInfo = allSongs.filter(
                (val) => val._id === currentSongId
            );
            currentSongInfo = currentSongInfo[0];
            dispatch(setPlayPause(true));

            dispatch(setCurrentSong({ ...currentSongInfo }));
        };

        return (
            <div className="songs">
                {allSongs.map((val, idx) =>
                    currentSong._id === val._id ? (
                        <Song
                            key={idx}
                            songInfo={val}
                            isActive={true}
                            onClick={handleCurrentSong}
                        />
                    ) : (
                        <Song
                            key={idx}
                            songInfo={val}
                            isActive={false}
                            onClick={handleCurrentSong}
                        />
                    )
                )}
            </div>
        );
    }
};

export default Songs;
