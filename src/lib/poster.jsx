import axios from "axios";

const url = "https://pike-inter-agenda-france.trycloudflare.com";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const postTransaction = async (data) => {
  return axios
    .post(url + "/api/transactions", { ...data })
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
    .delete(url + `/api/transactions/${transactionId}`)
    .then((resp) => {
      const response = resp;
      return response;
    })
    .catch((error) => {
      return error;
    });
};
