import { gql, useQuery } from "@apollo/client";

const GET_PLAYLISTS = gql`
    query {
        getPlaylists {
            id
            title
        }
    }
`;


export const getPlaylists = () => {

    const { error, data, loading } = useQuery(GET_PLAYLISTS);
    return {
        error, loading, data,
    };
};
