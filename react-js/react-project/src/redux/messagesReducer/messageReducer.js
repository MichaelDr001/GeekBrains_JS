
const initialState = {
    messages: [
        {
            id: 1,
            title: 'Hellow world',
            chatId: 1
        },
        {
            id: 2,
            title: 'I`m fine !',
            chatId: 2
        }
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {


        default: 
            return state
    }
}