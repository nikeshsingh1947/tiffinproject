import axios from "axios";
import * as types from "./actiontypes";

const postrequest=(payload)=>{
    return{
        type:types.REGISTER_REQUEST,
        payload,
    };
};
const postsuccess=(payload)=>{
    return{
        type:types.REGISTER_SUCCESS,
        payload,
    }
}

const postfailure=(payload)=>{
    return{
        type:types.REGISTER_FAILURE,
        payload
    }
}
const loginsuccess=(payload)=>{
    return{
        type:types.LOGIN_REQUEST,
        payload
    }
}
const Logoutreq=(payload)=>{
    return{
        type:types.LOGOUT_REQUEST,
        payload
    }
}
const Postadmin=(payload)=>(dispatch)=>{
    dispatch(postrequest())
    axios.post("https://tiffiwalabackend.onrender.com/adminregister",payload).then((res)=>dispatch(postsuccess(res.data))).catch((err)=>dispatch(postfailure(err.data)))
}
const Adminlogin=(payload)=>(dispatch)=>{
    dispatch(postrequest())
    axios.post("https://tiffiwalabackend.onrender.com/adminlogin",payload).then((res)=>dispatch(loginsuccess(res.data))).catch((err)=>dispatch(postfailure(err.response.data.message)))
}
export {Postadmin,Adminlogin,Logoutreq}