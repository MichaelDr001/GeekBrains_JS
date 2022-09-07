
const initialState = {
    chats: [
        {
            id: 1,
            name: 'Michael'
        },
        {
            id: 2,
            name: 'Alex'
        }
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }

        default:
            return state
    }
}