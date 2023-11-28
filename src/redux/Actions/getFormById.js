import axios from "axios";

export const GET_FORM_ID = "GET_FORM_ID";

export const getFormById = (id) => {
  return async (dispatch) => {
    //let info = await axios.get(`http://localhost:3001/forms/${id}`);
    //let info = await axios.get(`https://formserver-t5jb.onrender.com/forms/${id}`);
     let info = await axios.get(`https://easyform-server-production.up.railway.app/forms/${id}`);
    
    return dispatch({ type: GET_FORM_ID, payload: info.data });
  };
};
