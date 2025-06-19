import axios from "axios";

export async function getTransactions() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let errorFetch = undefined;
  try {
    const response = await axios.get(apiUrl + "/api/transactions");

    return response;
  } catch (error) {
    errorFetch = error;
    return errorFetch;
  }
}
