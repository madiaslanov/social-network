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


export const loginUserApi = (email, password, rememberMe) => {
    return instance.post(`auth/login`, {email, password, rememberMe}).then(res => res.data);
}

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
    return instance.put(`/profile`,me).then(res => res.data);
}