import axios from 'axios'
export const POST_RES = "POST_RES";

export const postResponses = (payload) => {
    return async (dispatch) => {

       //  let info = await axios.post('https://formserver-t5jb.onrender.com/response',payload);
        let info = await axios.post('https://easyform-server-production.up.railway.app/response',payload);
        
        return dispatch({ type: POST_RES, payload: info.data });
    }
}
