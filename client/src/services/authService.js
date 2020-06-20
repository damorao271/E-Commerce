import http from "./httpServices";
let apiEndPoint = require("../../src/env");

// apiEndPoint = "http://localhost:3900";
// apiEndPoint = apiEndPoint + "/products";
// apiEndPoint = "http://localhost:3900/users";

apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/auth";

export function login(email, password) {
  return http.post(apiEndPoint, { email, password });
}
