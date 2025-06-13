import axios from "axios";

export async function getTransactions() {
  const url = "http://localhost:3000";
  let errorFetch = undefined;
  try {
    const response = await axios.get(url + "/api/transactions");
    return response;
  } catch (error) {
    errorFetch = error;
    return errorFetch;
  }
}
