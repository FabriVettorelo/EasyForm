import axios from 'axios'
export const UPDATE_RES = "UPDATE_RES";

export const updateResponse = (id, formValues) => {
    return async (dispatch) => {    
        const info = await axios.put(`https://formserver-t5jb.onrender.com/response/${id}`, formValues);
        return dispatch({ type: UPDATE_RES, payload: info.data });
    }
}
