import { toast } from "react-toastify";
import { api } from "./api";

export const getUserHomeData = async () => {
  try {
    const res = await api.get(`/home-page`, {
      withCredentials: true,
    });
    console.log(res);
    return res?.data;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
  }
};

export const getItemDetails = async (setProductData, itemId) => {
  try {
    const res = await api.get(`/getProduct/${itemId}`, {
      withCredentials: true,
    });
    setProductData(res?.data?.data);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};

export const getFarmerData = async (id, setFarmerData, setCategoryData) => {
  const res = await api.get(`/getFarmer/${id}`, { withCredentials: true });
  setFarmerData(res?.data?.data?.farmerData);
  setCategoryData(res?.data?.data?.product);
  return res?.data;
};
