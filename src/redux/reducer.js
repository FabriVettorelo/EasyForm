import { POST_USER } from "./Actions/postUser";
import { GET_FORM } from "./Actions/getForm";
import { GET_FORM_NAME } from "./Actions/getFormByName";
import { GET_FORM_ID } from "./Actions/getFormById";
import { GET_RES } from "./Actions/getResponses";
import { POST_RES } from "./Actions/postResponses";
import { UPDATE_RES } from "./Actions/updateResponse";
import { DELETE_RES } from "./Actions/deleteResponse";
import { LOGIN } from "./Actions/login";
import { LOGOUT } from "./Actions/logout";
import { GET_USER_ID } from "./Actions/getUserById";
import { GET_RES_ID } from "./Actions/getResponseById";



const initialState = {
  allForms: [],
  filteredByNameForm:[],
  user:{},
  selectedFormId:[],
  response: {},
  allResponses: [],
  access:false,
  clientId: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_FORM_NAME:
      return { ...state , filteredByNameForm: action.payload}; 

    case GET_FORM_ID:
      return { ...state , selectedFormId:action.payload }; 

    case GET_RES_ID:
      return { ...state, response: action.payload }

    case GET_USER_ID:
      return { ...state, user: action.payload };

    case UPDATE_RES:
      return { ...state };

    case POST_RES:
      return { ...state };

    case DELETE_RES:
      return {
        ...state,
      };

    case LOGIN:
      localStorage.setItem("clientId", action.payload.user.id);
      localStorage.setItem("access", true);
      return {
        ...state,
        clientId: action.payload.id,
        access: true,
      };

    case LOGOUT:
      return {
        ...state,
        clientId: 0,
        access: false,
      };

    case POST_USER:
      return {
        ...state,
      };
    case GET_RES:
      return {
        ...state,
        allResponses: action.payload,
      };

    case GET_FORM:
      return {
        ...state,
        allForms: action.payload
      };



    default:
      return state;
  }
};
export default reducer;
