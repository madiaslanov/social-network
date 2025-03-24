const initialState = {
    postsData: [{id: 1, message: 'My first post', count: 15},
        {id: 2, message: 'Good bye!', count: 20}],
    newTextValue: '',
    profile: null,
    status: ""
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

        case 'UPDATE_NEW_TEXT':
            return {
                ...state,
                newTextValue: action.newText
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
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
        default:
            return state;
    }
};


export default ProfileReducer;
