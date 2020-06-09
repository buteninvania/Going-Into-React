const ADD_MESSAGE = "ButInProject/message/ADD-MESSAGE";


let initialState = {
    messageData: [{id: 1, message: "Hi" },
                  {id: 2, message: "How to works on a project?"},],
    dialogData: [
        {name: "Vitalik", id: 1, urlImg: "https://sun9-14.userapi.com/c855128/v855128037/1c553e/WT0UFN-xILI.jpg?ava=1"},
        {name: "Daria", id: 2, urlImg: "https://sun9-61.userapi.com/c855336/v855336497/145d52/L6CtsbEdxFo.jpg"},
        {name: "Oleg", id: 3, urlImg: "https://sun9-45.userapi.com/c844616/v844616398/207962/5BjopuAyuuc.jpg"},
        {name: "Katy", id: 4, urlImg: "https://sun9-5.userapi.com/c855020/v855020899/226ab5/6vxTwkqdk78.jpg"},
        {name: "Anna", id: 5, urlImg: "https://sun9-58.userapi.com/c858216/v858216788/d19d8/eu8o4c8Wsp8.jpg?ava=1"},
    ],
};

const messageReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                messageData: [...state.messageData, {id:3, message:text}],
            };
        default:
            return state;
    }
}

export const addMessageAC = (newMessageText) => ({type: ADD_MESSAGE, newMessageText:newMessageText})

export default messageReduser;