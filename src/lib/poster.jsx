import axios from "axios";

const url = "https://4ceb-102-64-146-217.ngrok-free.app";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const postTransaction = (data) => {
  axios
    .post(url + "/api/transactions", { data })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);

      return false;
    });
};

export const destroyTransactions = (transactionId) => {
  axios
    .delete(url + `/api/transactions/${transactionId}`)
    .then((resp) => {
      const response = resp;
      return response;
    })
    .catch((error) => {
      return error;
    });
};
