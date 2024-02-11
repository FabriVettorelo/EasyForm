import axios from 'axios';
export const GET_FORM_NAME = "GET_FORM_NAME";

export default function getFormByName(name) {
    return async function (dispatch) {
        try {
            //let result = await axios.get(`https://formserver-t5jb.onrender.com/forms?name=${name}`);
            let result = await axios.get(` https://easyformserver.onrender.com/forms?name=${name}`);
           
            if (result.data.length === 0) {
                alert("Sin Resultados")
            } else {
                return dispatch({
                    type: GET_FORM_NAME,
                    payload: result.data,
                });
            }
        } catch (error) {
            console.log("Error in Action GET_FORM_NAME: ", error);
        }
    };
}
