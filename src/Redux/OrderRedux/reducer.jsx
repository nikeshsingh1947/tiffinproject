import * as types from "./actionTypes";
const initState={
    pictures:[],
    error:"",
    loading:false,
    ser:"",
    statid:{},
}

 const OrderReducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.FETCH_REQUEST:
            return{
                ...state,
                error:"",
                loading:true,
            }
        case types.FETCH_SUCCESS:
            return{
                ...state,
                pictures:payload,
                error:"",
                loading:false, 

            }
        case types.FETCH_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false,

            }
        default:
            return state;
    }
}
export default OrderReducer