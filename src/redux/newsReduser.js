const initialState = {
    trendNews: []
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
       case "GET_TREND_NEWS_SUCCESS":
           return {
               ...state,
               trendNews: action.payload
           }
        default:
            return state;
    }
};

export default musicReducer;
