import axios from "axios";
export const GET_USER_ID = "GET_USER_ID";

export const getUserById = (id) => {
  return async (dispatch) => {
    //let info = await axios.get(`http://localhost:3001/users/${id}`);
    //let info = await axios.get(`https://formserver-t5jb.onrender.com/users/${id}`);
    let info = await axios.get(`https://easyform-server-production.up.railway.app/users/${id}`);
    
    return dispatch({ type: GET_USER_ID, payload: info.data });
  };
};
