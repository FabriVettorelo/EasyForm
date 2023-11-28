import axios from "axios";
export const LOGIN = 'LOGIN';

export const login = (user) => {
    return async function (dispatch) {
      try {
      //const response = await axios.post("https://formserver-t5jb.onrender.com/login", user);
          const response = await axios.post("https://easyform-server-production.up.railway.app/login", user);
          
        return  dispatch({type: LOGIN, payload: response.data});
      } catch (error) {
        throw error; }     
    };
};
