import { toast } from "react-toastify";
import { api } from "./api";
import { useNavigate } from "react-router-dom";

export const viewProfile = async () => {
  try {
    const res = await api.get("/customer/profileView", {
      withCredentials: true,
    });
    return res?.data;
  } catch (err) {
    console.log(err);
    toast.error(`${err?.response?.data?.message}`);
    throw new Error(err?.response?.data?.message);
  }
};
