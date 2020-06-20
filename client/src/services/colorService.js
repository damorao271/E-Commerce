import http from "./httpServices";
let apiEndPoint = require("../../src/env");

// apiEndPoint = "http://localhost:3900";s
// let apiEndPoint = process.env.SERVER_URL + "/users";

apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/color";

export async function getColor() {
  try {
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}
