import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/redux/cart";
import {movieApi} from "@/redux/movieApi";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});