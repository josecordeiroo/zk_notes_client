import Api from "./api";

const NotesServices = {
  index: () =>
    Api.get("/notes", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  create: (params) =>
    Api.post("/notes", params, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  delete: (id) =>
    Api.delete(`/notes/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),

  patch: (id, params) =>
    Api.patch(`/notes/${id}`, params, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
    search: (query) =>
    Api.get(`/notes/search?query=${query}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
};

export default NotesServices;
