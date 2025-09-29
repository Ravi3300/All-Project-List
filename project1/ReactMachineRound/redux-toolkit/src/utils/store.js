import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice'
const store = configureStore({
     reducer:{
        counter:counterSlice  // Yaha pr hum koi bhi naam e shkte hai counterSice ke jgh bs import sahi jgh se hona chiye
     }
})

export default store;