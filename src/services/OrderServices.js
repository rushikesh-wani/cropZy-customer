import { toast } from "react-toastify";
import { api } from "./api";

const getAllOrders = async () => {
  try {
    const res = await api.get("/my-orders");
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const makeOrder = async () => {
  try {
    const res = await api.post("/order/createOrder", {});
    if (res?.status === 201) {
      console.log(res);
      toast.success("Order placed successfully!");
      return res;
    }
  } catch (err) {
    console.log(err);

    toast.warn(err?.response?.data?.message || "Error while placing order");
  }
};
