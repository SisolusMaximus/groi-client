import MessageActionTypes from "./message.types"

const INITIAL_STATE = {
    currentMessage: null,
}

const messageReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case MessageActionTypes.SET_CURRENT_MESSAGE:
           return {
                ...state,
                currentMessage: action.payload
            }
        default:
            return state
    }
}


export default messageReducer