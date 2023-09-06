import axios from "axios";

export const GET_FORM = "GET_FORM";

export const getForm =  () => {
  return async function (dispatch) {
    const result = await axios.get("http://localhost:3001/forms");

    return dispatch({
      type: GET_FORM,
      payload: result.data,
    });
  };
}