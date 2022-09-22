import Api from "./api";

const UsersService = {
  index: () =>
    Api.get("/users", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  register: (params) => Api.post("/users/register", params),
  login: async (params) => {
    const response = await Api.post("/users/login", params);
    localStorage.setItem("user", response.data.user);
    localStorage.setItem("token", response.data.token);
  },
  logout: () => {
    localStorage.removeItem("user", null);
    localStorage.removeItem("token", null);
  },
  put: (params) =>
    Api.put(`/users`, params, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  updatePassword: (id, params) =>
  Api.put(`/users/password/${id}`, params, {
    headers: { "x-access-token": localStorage.getItem("token") },
  }),
  delete: (id) =>
  Api.delete(`/users/delete/${id}`, {
    headers: { "x-access-token": localStorage.getItem("token") },
  }),
};

export default UsersService;
