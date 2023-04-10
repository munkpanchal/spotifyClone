import { gql, useQuery } from "@apollo/client";

const GET_SONGS = gql`
    query Query($playlistId: Int!, $search: String) {
        getSongs(playlistId: $playlistId, search: $search) {
            _id
            artist
            photo
            duration
            title
            url
        }
    }
`;
export const getSongs = (playlistId) => {
    const { error, data, loading } = useQuery(GET_SONGS, {
        variables: {
            playlistId,
        },
    });
    return {
        error, loading, data
    };

};
