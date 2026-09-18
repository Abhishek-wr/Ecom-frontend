import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./Reducer/ProductReducer";
import { errorReducer } from "./Reducer/errorReducer";
import { cartReducer } from "./Reducer/cartReducer";
import { authReducer } from "./Reducer/authReducer";
import { paymentMethodReducer} from "./Reducer/paymentMethodReducer";

const user= localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")):null;
const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")):[];

const initialState = {
    auth : {user:user },
    carts : {cart:cartItems},
}
const store = configureStore({
    reducer:{
        products:ProductReducer,
        errors : errorReducer,
        carts : cartReducer,
        auth: authReducer,
        payment:paymentMethodReducer
    },
    preloadedState:initialState
})
export default store;