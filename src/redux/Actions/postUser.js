import axios from "axios";
export const POST_USER = 'POST_USER';

export const postUser = (user) => {
    return async function () {
      const response = await axios.post(
          "https://formserver-t5jb.onrender.com/users", user);
      return response;
    };
};
