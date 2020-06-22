import http from "./httpServices";
// let apiEndPoint = require("../../src/env");

// apiEndPoint = "http://localhost:3900";

// apiEndPoint = apiEndPoint + "/products";

// apiEndPoint = "http://localhost:3900/users";

let apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/products";

export async function getProducts() {
  try {
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsByID(id) {
  try {
    const { data } = await http.get(`${apiEndPoint}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function saveProduct(product) {
  // if (user._id) {
  //   const body = { ...user };
  //   delete body._id;
  //   return http.put(movieUrl(user._id), body);
  // }
  console.log("URL:", apiEndPoint);
  console.log("Product:", product);
  return http.post(apiEndPoint, product);
}
