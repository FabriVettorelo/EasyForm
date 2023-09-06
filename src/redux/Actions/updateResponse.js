import axios from 'axios'

export const UPDATE_RES = "UPDATE_RES";

export const updateResponse = (id, formValues) => {
    return async (dispatch) => {
    
        const info = await axios.put(`http://localhost:3001/response/${id}`, formValues);
        console.log(formValues);
        console.log(id);
        return dispatch({ type: UPDATE_RES, payload: info.data });

    }
}