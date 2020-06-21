import http from "./httpServices";
import jwtDecode from "jwt-decode";
let apiEndPoint = require("../../src/env");

// apiEndPoint = "http://localhost:3900";
// apiEndPoint = apiEndPoint + "/products";
// apiEndPoint = "http://localhost:3900/users";

apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/auth";

const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
http.setJWT(getJWT());

export default {
  login,
  logout,
  getJWT,
  loginWithJWT,
  getCurrentUser,
};
