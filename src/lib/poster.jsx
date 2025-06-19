import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const postTransaction = async (data) => {
  return axios
    .post(apiUrl + "/api/transactions", { ...data })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);

      return false;
    });
};

export const destroyTransactions = (transactionId) => {
  return axios
    .delete(apiUrl + `/api/transactions/${transactionId}`)
    .then((resp) => {
      const response = resp;
      return response;
    })
    .catch((error) => {
      return error;
    });
};
