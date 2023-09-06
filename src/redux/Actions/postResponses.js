import axios from 'axios'

export const POST_RES = "POST_RES";

export const postResponses = (payload) => {
    return async (dispatch) => {

         let info = await axios.post('http://localhost:3001/response',payload);

        return dispatch({ type: POST_RES, payload: info.data });
    }
}