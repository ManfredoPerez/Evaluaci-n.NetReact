import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7029/api", // URL de tu API
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic " + btoa("admin:admin"), // Autenticación básica
  },
});

export default api;