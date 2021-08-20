import { createStore } from 'redux'

const initialState = {
    number: 0,
    number1: 0,
    number2: 0,
    nestedNumber: {
        number1: {
            number: 0,
            level2: { number: 0 },
        },
        number2: 0
    }
}
export const reducers = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'INC':
            return { ...state, number: state.number + 1 }
        case 'INC1':

            newState.nestedNumber.number1.number = newState.nestedNumber.number1.number + 1
            return newState
        case 'INC2':
            newState.nestedNumber.number1.level2.number = newState.nestedNumber.number1.level2.number + 1
            return newState
        case 'DECR':
            return { ...state, number: 1 }
        default:
            return state
    }
}
const store = createStore(reducers)
export default store