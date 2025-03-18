import { toast } from "react-toastify";
import { api } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const clearCart = async () => {
  try {
    const res = await api.post("/cart/clear-cart", {});
    if (res.status === 200) {
      toast.success("Cart cleared...");
    }
  } catch (err) {
    console.log(err.message);
    toast.warn(err?.request?.data?.err);
  }
};

export const getCart = async () => {
  try {
    const res = await api.get("/my-cart");
    if (res?.status === 200) {
      return res?.data?.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const addItemToCart = async (itemId) => {
  try {
    const res = await api.post(`/addItem`, {
      itemId: itemId,
    });
    if (res.status === 200) {
      console.log(res?.data);
      toast.success(`${res?.data?.message}` || "Item added to cart");
    }
  } catch (err) {
    console.log(err);
    toast.warn(err?.response?.data?.message);
  }
};

export const manageQty = async ({ action, itemId }) => {
  try {
    const res = await api.post(`/cart/${action}/${itemId}`);
    console.log(res?.data);
    return res?.data; // Return response data for further use
  } catch (err) {
    console.error(err);
    throw err; // Ensure errors propagate to `onError` in `useMutation`
  }
};

export const useManageQty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: manageQty,
    onSuccess: () => {
      queryClient.invalidateQueries("userCart"); // Refetch cart data
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });
};
