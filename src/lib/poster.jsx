import axios from "axios";

const url = "http://localhost:3000";

export const postTransaction = (data) => {
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

export const destroyTransactions = (transactionId) => {
  axios
    .delete(url + `/api/transactions/${transactionId}`, {})
    .then((resp) => {
      const response = resp;
      return response;
    })
    .catch((error) => {
      console.log(error);

      return false;
    });
};
