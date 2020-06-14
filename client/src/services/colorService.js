import http from "./httpServices";
require("dotenv").config();

let apiEndPoint = process.env.SERVER_URL + "/users";

apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/color";

export async function getColor() {
  try {
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}