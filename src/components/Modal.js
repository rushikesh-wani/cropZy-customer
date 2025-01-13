import {
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  CheckCircle,
  Sparkle,
  Sparkles,
  XCircle,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({
  setIsModalOpen,
  total,
  id,
  farmerName,
  customerName,
  dateAndTime,
}) => {
  const navigate = useNavigate();
  const navToOrder = () => {
    setIsModalOpen(false);
    navigate("/orders");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
      <div className=" bg-white rounded-lg p-4 w-11/12 max-w-md">
        <div className="w-full inline-flex justify-end">
          <button
            onClick={closeModal}
            className="w-8 h-8 flex justify-center items-center rounded-full shadow-md"
          >
            <XCircle className="size-6" />
          </button>
        </div>
        <div className="relative font-palanquin">
          <Sparkles className="size-8 absolute top-[5%] left-[20%]" />
          <Sparkle className="size-5 absolute top-[25%] right-[5%]" />
          <Sparkles className="absolute top-[40%] left-[0%]" />
          <div className="mx-12 text-center">
            <CheckCircle className="size-16 mx-auto " />
            <div className="text-xl font-semibold font-montserrat">
              <p>Order</p>
              <p>Placed Successfully</p>
            </div>

            <div className="my-5 p-2 bg-green-500/50 rounded-lg border-black border-2 border-dashed font-montserrat">
              <p className="font-bold font-montserrat">Total</p>
              <p className="text-3xl font-bold">₹ {total}</p>
            </div>
            <div className="my-2 leading-tight">
              <p className="font-bold">Order ID:</p>
              <p className="text-gray-600">{`#${id}`}</p>
            </div>
            <div className="my-2 leading-tight">
              <p className="font-bold">Farmer Name</p>
              <p className="text-gray-600">{customerName}</p>
            </div>
            <div className="my-2 leading-tight">
              <p className="font-bold">Order Created At</p>
              <p className="text-sm text-gray-600">
                {Date(dateAndTime).toLocaleString()}
              </p>
            </div>
          </div>
          {/* <div className="w-full my-2 text-lg font-medium inline-flex gap-1 justify-center items-center leading-tight">
            <p className="w-[45%] min-w-[45%] justify-center truncate">
              {customerName}
            </p>
            <ArrowRightCircle className="w-[10%] min-w-[10%]" />
            <p className="w-[45%] min-w-[45%] truncate">{farmerName}</p>
          </div> */}

          <button
            onClick={navToOrder}
            className="mt-2 mx-auto flex gap-2 items-center justify-center py-2 px-4 bg-green-600 text-white rounded-md font-montserrat font-medium shadow-md"
          >
            View My Orders <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
