import { GET_INPUT_VALUE } from "../actions";

export const inputValue = (state = "", action) => {
    switch(action.type) {
        case GET_INPUT_VALUE:
            return { ...state, inputValue: action.payload} 
         default:
             return state;   
    }
}