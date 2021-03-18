import {ADD_TODO, REMOVE_TODO} from './action.types';

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return[...state, action.payload]

        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload)
              
        default:
            break;
    }
}

export default todoReducer;