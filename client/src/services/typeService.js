import http from "./httpServices";
// let apiEndPoint = require("../../src/env");

// apiEndPoint = "http://localhost:3900";

// apiEndPoint = apiEndPoint + "/users";

let apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/typeList";

export async function getTypes() {
  try {
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}
