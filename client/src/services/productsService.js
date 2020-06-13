import http from "./httpServices";
require("dotenv").config();

let apiEndPoint = process.env.SERVER_URL + "/users";

// apiEndPoint = "http://localhost:3900/users";

apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/products";

export async function getProducts() {
  try {
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}
