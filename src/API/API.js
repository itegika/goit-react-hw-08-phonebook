import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
export async function onSignUp(credentials) {
  const { data } = await axios.post("/users/signup", credentials);
  return data;
}
export async function onLogIn(credentials) {
  const { data } = await axios.post("/users/login", credentials);
  return data;
}
export async function onLogOut() {
  await axios.post("/users/logout");
  return token;
}
export async function fetchCurrentUserData() {
  const { data } = await axios.get("/users/current");
  return data;
}
export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
