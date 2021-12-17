import { createStore } from 'redux'

const ADD_FLOWER = 'ADD_FLOWER'

let nextId = 0

const initialState = {flowers: []}

export const addFlower = (text) => (
    {
        type: ADD_FLOWER,
        id: nextId++,
        text
    }
)

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FLOWER: 
            const newFlower = {
                id: action.id,
                text: action.text,
                bought: false
            }
            return {...state, flowers: [...state.flowers, newFlower]}
        default:
            return state;
    }
}

const store = createStore(reducer)

export default store