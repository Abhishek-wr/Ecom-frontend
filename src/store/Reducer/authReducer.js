import { selectUserCheckOutAddress } from "../Action";

const initialState = {
    user:null,
    address:null,
    selectedUserCheckOutAddress : null,

}
export const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case "LOGIN_USER":
            return {...state,user:action.payload};
        case "USER_ADDRESS":
            return {...state,address:action.payload};
        case "LOG_OUT":
            return {
                user:null,
                address:null,
            };
        case "SELECT_CHECKOUT_ADDRESS":
            return{
                ...state, 
                selectedUserCheckOutAddress : action.payload
            }
        case "REMOVE_CHECKOUT_ADDRESS":
            return{
                ...state,selectUserCheckOutAddress:null
            }
        // case "DELETE_ADDRESS":
        //     return{
        //         ...state,
        //         address
        //     }
        default:
            return state;
    }
}