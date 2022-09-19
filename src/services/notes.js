import Api from "./api";

const NotesServices = {
  index: () =>
    Api.get("/notes", {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
  create: () =>
    Api.post(
      "/notes",
      {
        title: "Testando",
        body: "Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.Modern JavaScript is a safe programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it. JavaScripts capabilities greatly depend on the environment its running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.",
      },
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    ),
  delete: (id) =>
    Api.delete(`/notes/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    }),
};

export default NotesServices;
