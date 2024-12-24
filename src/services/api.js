import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Check if the error is related to JWT expiration
      const errorMessage = error.response.data?.message || "";
      if (errorMessage.includes("Token expired")) {
        localStorage.removeItem("isAuthenticated");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
