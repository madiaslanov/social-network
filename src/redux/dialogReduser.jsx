const initialState = {
    dialogData: [
        {name: 'Adi', id: 1},
        {name: 'Shoqan', id: 2},
        {name: 'Sultan', id: 3},
        {name: 'Bakdaulet', id: 4},
        {name: 'Ernur', id: 5}
    ],
    messageData: [
        {message: 'Hello my bro!', id: 1},
        {message: 'Whats up?', id: 2},
        {message: 'Im student of KBTU', id: 3}
    ]
};


const DialogReduser = (state = initialState, action) => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                message: action.newMessage,
                id: Date.now()
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            }
        default:
            return state;
    }

};

export default DialogReduser;