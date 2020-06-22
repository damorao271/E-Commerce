import http from "./httpServices";
// let apiEndPoint = require("../../src/env");

// apiEndPoint = "http://localhost:3900";
// apiEndPoint = apiEndPoint + "/users";

let apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/users";

export async function getUser() {
  try {
    // console.log("apiEndPoint", apiEndPoint);
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}

export async function saveUser(user) {
  // if (user._id) {
  //   const body = { ...user };
  //   delete body._id;
  //   return http.put(movieUrl(user._id), body);
  // }
  return http.post(apiEndPoint, user);
}
