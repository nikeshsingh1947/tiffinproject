import axios from "axios";
import * as types from "./actionTypes";

const fetchdatafailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

const fetchdatarequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};
const fetchdatasuccess = (payload) => {
 
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};

const Saveserch=(payload)=>{
  return{
    type:types.FETCH_SEARCH_DATA,
    payload,
  }
}
const Fetchdata = (payload) => {
  return (dispatch) => {
    dispatch(fetchdatarequest());
    axios
      .get(
        `https://tiffiwalabackend.onrender.com/menue`
      )
      .then((r) => dispatch(fetchdatasuccess(r)))
      .catch((r) => dispatch(fetchdatafailure(r)));
  };
};

export {
  Fetchdata,
  Saveserch
};
