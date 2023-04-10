import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../graphql/getPlaylists";
import { setAllSongs, setCurrentPlaylist } from "../redux/playerSlice";
import { getSongs } from "../graphql/getSongs";
import Loader from "./Loader";
const Playlist = () => {
    const dispatch = useDispatch();
    const { error, data, loading } = getPlaylists();
    const currentPlaylist = useSelector(
        (state) => state.player.currentPlaylist.id
    );
    const songs = getSongs(currentPlaylist);
    if (songs.data) {
        dispatch(setAllSongs(songs.data.getSongs));
    }
    const handleCurrentPlaylist = (e) => {
        let newId = e.target.id;
        newId = newId.split("-");
        newId = Number(newId[newId.length - 1]);
        const newTitle = data.getPlaylists.filter((val) => val.id === newId)[0]
            .title;

        dispatch(setCurrentPlaylist({ id: newId, title: newTitle }));
    };

    if (loading) {
        return <Loader />;
    }
    if (data) {
        const playlists = data["getPlaylists"];

        return (
            <div className="playlist">
                <ul className="categories">
                    {playlists.map((val) => (
                        <li
                            key={val.id}
                            id={`playlist-${val.id}`}
                            className={`category ${
                                val.id === currentPlaylist ? "active" : ""
                            }`}
                            onClick={handleCurrentPlaylist}
                        >
                            {val.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Playlist;
