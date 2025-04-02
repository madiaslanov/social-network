import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "115035e9-7031-4bfd-9b30-39b2a23ede3b"
        },
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
    }
)


export const getUsersApi = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(res => {
        return res.data
    });
}


export const followUserApi = (userId) => {
    return instance.post(`follow/${userId}`).then(res => res.data);
};

export const unfollowUserApi = (userId) => {
    return instance.delete(`follow/${userId}`).then(res => res.data);
};


export const getProfileApi = (userId) => {
    return instance.get(`profile/${userId}`).then(res => {
        return res.data
    })
}


export const getAuthUserApi = () => {
    return instance.get(`auth/me`).then(res => {
        return res.data
    })
}

export const getProfileStatusApi = (userId) => {
    return instance.get(`profile/status/${userId}`).then(res => {
        return res.data
    })
}


export const putProfileStatusApi = (status) => {
    return instance.put(`profile/status`, {status}).then(res => res.data);
};


export const loginUserApi = (email, password, rememberMe, captcha) => {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);
};

export const logoutUserApi = async () => {
    const response = await instance.delete(`auth/login`);
    return response.data;
};

export const putPhotoApi = (photo) => {
    const formData = new FormData();
    formData.append("image", photo);

    return instance.put(`/profile/photo`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => res.data);
};

export const putAboutMeApi = (me) => {
    return instance.put(`/profile`, me).then(res => res.data);
}

export const getSecurityApi = async () => {
    return instance.get('security/get-captcha-url').then(res => res.data);
}

export const musicApi = {
    getSpotifyToken: async () => {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'client_credentials',
                client_id: '54c1b7b68cef4dd4ba889c14ef4c4e8c',
                client_secret: '7403a04689ac46389007e7a0a3575d6a',
            }
        });
        return response.data.access_token;
    },

    getArtist: async (artistId, token) => {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
    getArtists: async (token) => {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: 'artist',
                type: 'artist',
                limit: 50,
                offset: 50
            }
        });
        return response.data.artists.items;
    },
    getArtistTopTracks: async (artistId, token) => {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
    getTrack: async (trackId, token) => {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    },
    getAlbums: async (albumId, token) => {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: 'album',
                type: 'album',
                limit: 20,
            }
        })
        return response.data;
    },
    getAlbum: async (albumId, token) => {
        const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data;
    }
};


export const newsApi = {
    getTrendingTopicsNews: async () => {
        try {
            const response = await axios.get('https://api.mediastack.com/v1/news', {
                params: {
                     "access_key" : "39dac778a96676aece881ed92c37e678",
                    "category" : "general",
                    limit: 9,
                }
            });
            return response.data.data || [];
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }
};

const news = await newsApi.getTrendingTopicsNews();
console.log(news);