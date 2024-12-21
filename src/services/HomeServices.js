import { toast } from "react-toastify";
import { api } from "./api";
import { addData } from "../store/HomeDataSlice";

export const getUserHomeData = async (dispatch) => {
  try {
    const res = await api.get(`/home-page`, {
      withCredentials: true,
    });
    console.log(res);
    dispatch(addData(res?.data));
    return res?.data;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
  }
};

export const getItemDetails = async (
  setProductData,
  itemId,
  setIsLoading,
  setIsError,
  setError
) => {
  try {
    const res = await api.get(`/getProduct/${itemId}`, {
      withCredentials: true,
    });
    if (res.status === 200) {
      setProductData(res?.data?.data);
      setIsLoading(false);
      return;
    }
  } catch (err) {
    setIsError(true);
    setIsLoading(false);
    setError(err?.response?.data?.message);
    console.log(err);
  }
};

export const getFarmerData = async (
  id,
  setFarmerData,
  setCategoryData,
  setIsLoading,
  setIsError,
  setError
) => {
  try {
    const res = await api.get(`/getFarmer/${id}`, { withCredentials: true });
    if (res.status === 200) {
      setFarmerData(res?.data?.data?.farmerData);
      setCategoryData(res?.data?.data?.product);
      setIsLoading(false);
      return;
    }
  } catch (err) {
    setIsError(true);
    setIsLoading(false);
    setError(err?.response?.data?.message);
  }
};
