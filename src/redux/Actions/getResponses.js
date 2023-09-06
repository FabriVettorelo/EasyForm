import axios from "axios";

export const GET_RES = "GET_RES";

export const getResponses=  () => {
  return async function (dispatch) {
     const result = await axios.get("http://localhost:3001/response");

    return dispatch({
      type: GET_RES,
      payload: result.data,
    });
  };
}