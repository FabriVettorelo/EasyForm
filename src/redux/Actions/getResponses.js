import axios from "axios";
export const GET_RES = "GET_RES";

export const getResponses=  () => {
  return async function (dispatch) {
     //const result = await axios.get("https://formserver-t5jb.onrender.com/response");
    const result = await axios.get("https://easyform-server-production.up.railway.app/response");
    
    return dispatch({
      type: GET_RES,
      payload: result.data,
    });
  };
}
