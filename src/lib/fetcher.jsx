import axios from "axios";

export async function getTransactions() {
  const url = "https://pike-inter-agenda-france.trycloudflare.com";

  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  let errorFetch = undefined;
  try {
    const response = await axios.get(url + "/api/transactions");
    // console.log(response);

    return response;
  } catch (error) {
    errorFetch = error;
    return errorFetch;
  }
}
