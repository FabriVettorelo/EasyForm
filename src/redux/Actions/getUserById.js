import axios from "axios";

export const GET_USER_ID = "GET_USER_ID";

export const getUserById = (id) => {
  return async (dispatch) => {
    let info = await axios.get(`http://localhost:3001/users/${id}`);
    //let info = await axios.get(`https://sportiverse-server.onrender.com/activities/${id}`);
    return dispatch({ type: GET_USER_ID, payload: info.data });
  };
};