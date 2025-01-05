import { types } from "../types/types";

// así luciría el state
// const initialState = {
//     logged: false
// }


export const authReducer = (state={}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state, // es recomendable quedarse con todo lo que tenga el estado previo y pisar lo nuevo
                logged:true,
                user :action.payload,
            };

        case types.logout:
            return {
                logged:false,                
            };

        default:
            return state;
    }
}