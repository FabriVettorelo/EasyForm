import axios from "axios";

export const DELETE_RES = "DELETE_RES";

export function deleteRes(id) {
  return async function (dispatch) {
     //const result = await axios.delete(`http://localhost:3001/response/${id}`);
     //const result = await axios.delete(`https://formserver-t5jb.onrender.com/response/${id}`);
    const result = await axios.delete(`https://easyform-server-production.up.railway.app/response/${id}`);
    return dispatch({
      type: DELETE_RES,
      payload: result.data,
    });
  };
}
