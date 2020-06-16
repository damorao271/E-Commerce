import http from "./httpServices";
require("dotenv").config();

let apiEndPoint = process.env.SERVER_URL + "/users";

// apiEndPoint = "http://localhost:3900/users";

apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/users";

export async function getUser() {
  try {
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
  console.log("URL:", apiEndPoint);
  console.log("User:", user);
  return http.post(apiEndPoint, user);
}
