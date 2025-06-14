import axios from "axios";

export const poster = (data) => {
  const url = "http://localhost:3000";

  axios
    .post(url + "/api/transactions", {
      data,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);

      return false;
    });
};
