import axios from "axios";
import * as types from "./actionTypes";

const fetchfail = (payload) => {
  return {
    type: types.FETCH_FAILURE,
    payload,
  };
};

const fetchrequest = (payload) => {
  return {
    type: types.FETCH_REQUEST,
    payload,
  };
};
const fetchsuccess = (payload) => {
 
  return {
    type: types.FETCH_SUCCESS,
    payload,
  };
};


const Fetchorder = (payload) => {
  return (dispatch) => {
    dispatch(fetchrequest());
    axios
      .get(
        `https://tiffiwalabackend.onrender.com/orders`
      )
      .then((r) => dispatch(fetchsuccess(r.data)))
      .catch((r) => dispatch(fetchfail(r)));
  };
};

export {
  Fetchorder
 
};