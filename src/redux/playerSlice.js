import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentPlaylist: {
        "id": 1,
        "title": "For You"
    },
    allSongs: [
        {
            "_id": "61b6f14dc2f7cafd968c31f0",
            "artist": "Weeknd",
            "duration": 320,
            "photo": "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg",
            "title": "Starboy",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c31f4",
            "artist": "Coldplay",
            "duration": 290,
            "photo": "https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06831d17ae0",
            "title": "Adventure of a Lifetime ",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c31fc",
            "artist": "Imagine Dragons",
            "duration": 379,
            "photo": "https://i.scdn.co/image/ab67616d0000b2736a6a889eef62af7b190ec713",
            "title": "I Bet My Life",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c3204",
            "artist": "Bob Dylan",
            "duration": 410,
            "photo": "https://media.newyorker.com/photos/59fb842e68eaa81ba8a061a2/1:1/w_3287,h_3287,c_limit/Fishman-Loving-Bob-Dylan-at-His-Lowest-Point-2.jpg",
            "title": "Ain't Gonna Grieve",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c31f5",
            "artist": "Coldplay",
            "duration": 450,
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCTDI-nskC5wUkwseWIlHnsWBYtpNguiD-IB68gU2p9nrVTIIehiD1QzUuYeN_ZKC_GI&usqp=CAU",
            "title": "Amazing Day ",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c31f9",
            "artist": "Imagine Dragons",
            "duration": 320,
            "photo": "http://a10.gaanacdn.com/images/albums/96/1525196/crop_480x480_1525196.jpg",
            "title": "Shots",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c31f1",
            "artist": "Coldplay",
            "duration": 415,
            "photo": "https://i1.sndcdn.com/artworks-000084069767-om0uyb-t500x500.jpg",
            "title": "Til Kingdom Come ",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c3205",
            "artist": "Bob Dylan",
            "duration": 410,
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Joan_Baez_Bob_Dylan_crop.jpg/1200px-Joan_Baez_Bob_Dylan_crop.jpg",
            "title": "It's the Most Wonderful Time of the Year",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c3208",
            "artist": "The Script",
            "duration": 321,
            "photo": "https://i.scdn.co/image/ab67616d0000b273dd8408b50f45c66139f44ce2",
            "title": "Hall of Fame",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c3201",
            "artist": "Imagine Dragons",
            "duration": 280,
            "photo": "https://upload.wikimedia.org/wikipedia/en/e/e0/Imagine_Dragons_-_%22Amsterdam%22_%28Promotional_single%29.jpg",
            "title": "Amsterdam",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        },
        {
            "_id": "61b6f14dc2f7cafd968c31fd",
            "artist": "Imagine Dragons",
            "duration": 560,
            "photo": "https://external-preview.redd.it/SEOiJhnBbwkfSbmAHFPh8UrvpyKcRLyVbdtf5DWNtGc.jpg?auto=webp&s=8f815af3594caa6f01ef25d3da2a8b4e1a4239a6",
            "title": "It Comes Back to You",
            "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
        }
    ],
    mobileCollapse: false,
    currentSong: {
        "_id": "61b6f14dc2f7cafd968c31f0",
        "artist": "Weeknd",
        "duration": 320,
        "photo": "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg",
        "title": "Starboy",
        "url": "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3"
    },
    isPlaying: false,
    audioProgress: 0
};

export const playerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        setCurrentPlaylist: (state, action) => {
            state.currentPlaylist = { ...state.currentPlaylist, ...action.payload };
        },
        setCurrentSong: (state, action) => {
            state.currentSong = { ...state.currentSong, ...action.payload };
        },
        setAllSongs: (state, action) => {
            state.allSongs = [...action.payload];
        },
        setPlayPause: (state, action) => {
            state.isPlaying = action.payload;
        },
        setAudioProgress: (state, action) => {
            state.audioProgress = action.payload;
        },
        setMobileCollapse: (state, action) => {
            state.mobileCollapse = action.payload;
        },
        setPrevSong: (state, action) => { },
    }

});
export const { setCurrentPlaylist, setCurrentSong, setPlayPause, setNextSong, setPrevSong, setAudioProgress, setAllSongs, setMobileCollapse } = playerSlice.actions;
export default playerSlice.reducer;