import { toast } from "react-toastify";
import { api } from "./api";

export const logout = async () => {
  try {
    const res = await api.post("/logout", {}, { withCredentials: true });
    if (res.status === 200) {
      toast.success(`${res?.data?.message}`);
      localStorage.removeItem("isAuthenticated");
    }
  } catch (err) {
    console.log(err);
  }
};
