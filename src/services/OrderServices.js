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
