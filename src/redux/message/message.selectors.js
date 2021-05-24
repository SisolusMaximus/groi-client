import {createSelector} from 'reselect'

const selectMessages = state => (state.message)

export const selectCurrentMessage = createSelector(
    [selectMessages],
    message => message.currentMessage
)