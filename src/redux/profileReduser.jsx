const initialState = {
    postsData: [{message: 'My first post', id: '1', count: 15},
        {message: 'Good bye!', id: '2', count: 20}],
    newTextValue: '',
    profile: null,
    status: ""
};


const ProfileReduser = (state = initialState, action) => {

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
        default:
            return state;
    }
};


export default ProfileReduser;
