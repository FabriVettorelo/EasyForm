import axios from 'axios';
import Swal from "sweetalert2";

export const GET_FORM_NAME = "GET_FORM_NAME";

export default function getFormByName(name) {
    return async function (dispatch) {
        try {
            let result = await axios.get(`https://formserver-t5jb.onrender.com/forms?name=${name}`);
            if (result.data.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Sin resultados',
                    text: 'No se encontraron resultados',
                    showConfirmButton: false, 
                    timer: 3000, 
                    background: '#FFFFFF',
                    timerProgressBar: true,
                    backdrop: true,
                    showClass: { popup: 'animate__animated animate__fadeInDown'},
                    hideClass: { popup: 'animate__animated animate__fadeOutUp'}                    
                });
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
