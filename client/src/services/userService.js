import http from "./httpServices";
require("dotenv").config();

let apiEndPoint = process.env.SERVER_URL + "/users";

apiEndPoint = "http://localhost:3900/users";

export async function getTypes() {
  return http.get(apiEndPoint);
}
