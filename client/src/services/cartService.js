import http from "./httpServices";
// apiEndPoint = "http://localhost:3900";
// apiEndPoint = apiEndPoint + "/products;

// let apiEndPoint = "https://e-commerce-mern-power.herokuapp.com/cart";

let apiEndPoint = "http://localhost:3900/cart";

export async function getCart() {
  try {
    const { data } = await http.get(apiEndPoint);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getCartByUser(user) {
  try {
    const { data } = await http.get(`${apiEndPoint}/${user}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getCartByUserAndId(user, id) {
  try {
    const { data } = await http.get(`${apiEndPoint}/${user}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteCart(id) {
  return http.delete(`${apiEndPoint}/${id}`, id);
}

export async function editCart(user, id) {
  try {
    return http.put(`${apiEndPoint}/${id}`, user);
  } catch (error) {
    return error;
  }
}

// No esta lista
export async function saveCart(cart) {
  return http.post(apiEndPoint, cart);
}
