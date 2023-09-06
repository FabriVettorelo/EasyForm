import axios from "axios";

export const DELETE_RES = "DELETE_RES";

export function deleteRes(id) {
  return async function (dispatch) {
     const result = await axios.delete(`http://localhost:3001/response/${id}`);
    return dispatch({
      type: DELETE_RES,
      payload: result.data,
    });
  };
}