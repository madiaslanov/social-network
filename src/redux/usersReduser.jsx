const initialState = {
    usersData: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW_USER":
            return {
                ...state,
                usersData: state.usersData.map(user =>
                    user.id === action.userId ? {...user, followed: true} : user
                ),
            };
        case "UNFOLLOW_USER":
            return {
                ...state,
                usersData: state.usersData.map(user =>
                    user.id === action.userId ? {...user, followed: false} : user
                ),
            };
        case "SET_USER":
            return {
                ...state,
                usersData: action.items,
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.page,
            };
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case "IS_FETCHING":
            return {
                ...state,
                isFetching: action.status,
            };
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            };
        default:
            return state;
    }
};

export default UsersReducer;
