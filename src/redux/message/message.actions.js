import MessageActionTypes from './message.types'


export const setCurrentMessage = msg =>(
    {
        type: MessageActionTypes.SET_CURRENT_MESSAGE,
        payload: msg
    }
)