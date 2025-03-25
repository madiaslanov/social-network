import {aboutMe} from "./actions";

const initialState = {
    postsData: [],
    newTextValue: '',
    profile: null,
    status: "",
    photos: null,
    aboutMe: {
        fullName: "",
        aboutMe: "",
        lookingForAJob: null,
        lookingForAJobDescription: "",
        contacts: ""
    }
};


const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                message: action.message,
                id: Date.now(),
                count: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
                photos: action.profile?.photos || state.photos,
                aboutMe: action.profile?.aboutMe
            };
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.filter(post => Number(post.id) !== action.id)
            };
        case 'SAVE_PHOTO':
            return {
                ...state,
                photos: {
                    ...state.photos,
                    large: action.photos?.large || state.photos.large,
                    small: action.photos?.small || state.photos.small,
                }
            };
        case 'ABOUT_ME':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload
                },
                aboutMe: {
                    ...state.aboutMe,
                    ...action.payload
                }
            };

        default:
            return state;
    }
};


export default ProfileReducer;
