export const sendMessage = (newMessage) => ({
    type: 'SEND-MESSAGE',
    newMessage,
});


export const addPost = (message) => ({
    type: 'ADD_POST',
    message,
});

export const followUser = (userId) => ({
    type: 'FOLLOW_USER',
    userId
});

export const unfollowUser = (userId) => ({
    type: 'UNFOLLOW_USER',
    userId
});

export const setUsers = (items) => ({
    type: 'SET_USER',
    items
});

export const setCurrentPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    page
})

export const setTotalCount = (totalCount) => ({
    type: 'SET_TOTAL_COUNT',
    totalCount
})

export const isFetching = (status) => ({
    type: 'IS_FETCHING',
    status
})

export const setUserProfile = (profile) => ({
    type: 'SET_USER_PROFILE',
    profile
})

export const setAuthUserData = ({userId, email, login, isAuth, messages}) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: {userId, email, login, isAuth, messages},
});


export const followingInProgress = (followingInProgress, userId) => ({
    type: 'FOLLOWING_IN_PROGRESS',
    followingInProgress,
    userId
})

export const setStatus = (status) => ({
    type: 'SET_STATUS',
    status
})


export const setFormData = (formData) => ({
    type: 'SET_FORM_DATA',
    payload: formData
})


export const deletePost = (id) => ({
    type: 'DELETE_POST',
    id: Number(id)
})

export const savePhoto = (photos) => ({
    type: 'SAVE_PHOTO',
    photos,
})

export const aboutMe = ({fullName, lookingForAJob, lookingForAJobDescription, contacts}) => ({
    type: 'ABOUT_ME',
    payload: {
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts
    }
})

export const captchaMessage = (url) => ({
    type: 'CAPTCHA_MESSAGE',
    payload: url
})

export const getArtistSuccess = (artistData) => ({
    type: 'GET_ARTIST_SUCCESS',
    payload: artistData,
});

export const getMusicFailure = (errorMessage) => ({
    type: 'GET_MUSIC_FAILURE',
    payload: errorMessage,
});


export const getArtistsSuccess = (artistsData) => ({
    type: 'GET_ARTISTS_SUCCESS',
    payload: artistsData
})


export const setArtistPageSize = (page) => ({
    type: 'SET_ARTIST_PAGE_SIZE',
    payload: page
});

export const setCurrentArtistPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    payload: page
});

export const setArtistsTotalCount = (totalCount) => ({
    type: 'SET_ARTISTS_TOTAL_COUNT',
    payload: totalCount
})

export const getArtistTopTracksSuccess = (tracks) => ({
    type: 'GET_ARTIST_TOP_TRACKS',
    payload: tracks
});


export const getTrackSuccess = (trackData) => ({
    type: 'GET_TRACK_SUCCESS',
    payload: trackData
})


export const getAlbumsSuccess = (albumData) => ({
    type: 'GET_ALBUMS_SUCCESS',
    payload: albumData
})

export const getAlbumSuccess = (albumId) => ({
        type: 'GET_ALBUM_SUCCESS',
        payload: albumId
})

export const getTrendNewsSuccess = (trendNews) => ({
    type: 'GET_TREND_NEWS_SUCCESS',
    payload: trendNews
})