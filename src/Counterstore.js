import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"

const Counterstore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default Counterstore