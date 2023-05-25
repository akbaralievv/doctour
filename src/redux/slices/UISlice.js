import {createSlice} from "@reduxjs/toolkit";

export const UISlice = createSlice({
    name:'UISlice',
    initialState:{
        popUp:Boolean,
        langPopUp:false,
        cityModal:false
    },
    reducers:{
        closePopUp:(state,action)=>{
            state.popUp=action.payload
            state.langPopUp=false
            state.cityModal=false
        },
        actionLangPops:(state,action)=>{
            state.cityModal=false
            if(state.langPopUp){
                state.langPopUp=false
            }else {
                state.langPopUp=true
            }
        },
        actionCityPop:(state,action)=>{
            state.langPopUp=false
            if(state.cityModal===true){
                state.cityModal=false
            }else {
                state.cityModal=true
            }
        }
    }
})

export const {closePopUp,actionLangPops,actionCityPop}=UISlice.actions
export default UISlice.reducer