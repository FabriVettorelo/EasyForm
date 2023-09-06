import axios from "axios";

export const GET_FORM_ID = "GET_FORM_ID";

export const getFormById = (id) => {
  return async (dispatch) => {
    let info = await axios.get(`http://localhost:3001/forms/${id}`);
    //let info = await axios.get(`https://sportiverse-server.onrender.com/activities/${id}`);
    return dispatch({ type: GET_FORM_ID, payload: info.data });
  };
};