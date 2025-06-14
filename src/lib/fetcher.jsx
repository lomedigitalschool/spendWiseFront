import axios from "axios";

export async function getTransactions() {
  const url = "https://7a68-102-64-146-217.ngrok-free.app";

  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let errorFetch = undefined;
  try {
    const response = await axios.get(url + "/api/transactions");
    return response;
  } catch (error) {
    errorFetch = error;
    return errorFetch;
  }
}
