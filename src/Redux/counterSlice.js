import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        counterValue:0
    },
    reducers:{
        increament:function(state){
            state.counterValue += 1
        },
        decreament:(state)=>{
            if(state.counterValue > 0)state.counterValue -= 1
        },
        reset(state){
            state.counterValue = 0
        },
        increamentByAmount(state, action){
            state.counterValue += action.payload
        }
    }
})

export const { increament, decreament, reset, increamentByAmount } = counterSlice.actions
export default counterSlice.reducer