import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        couterValue:0
    },
    reducers:{
        increament(state){
            state.couterValue += 1
        },
        decreament(state){
            state.couterValue -= 1
        },
        reset(state){
            state.couterValue = 0
        },
    }
})

export const { increament, decreament, reset } = counterSlice.actions
export default counterSlice.reducer
