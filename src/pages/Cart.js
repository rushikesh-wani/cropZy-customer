import React, { useEffect, useState } from "react";
import cart from "../assets/cart.avif";
import {
  AlertTriangle,
  ChevronRight,
  Minus,
  Plus,
  Receipt,
} from "lucide-react";
import OrderPlaced from "../components/OrderPlaced";
import { useDispatch, useSelector } from "react-redux";
import { decrementItem, incrementItem } from "../store/CartSlice";
const Cart = () => {
  const [cartData, setCartData] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-white p-2 rounded-xl flex gap-2">
                  <div className="w-[35%] h-28 bg-slate-200 rounded-md">
                    <img
                      src=""
                      alt="item-img"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-[65%]">
                    <p className="font-bold uppercase truncate">Tomato</p>
                    <div className="text-sm font-bold truncate">
                      ₹ 75
                      <span className="text-xs font-medium text-slate-700">
                        / 1 kg
                      </span>
                    </div>
                    <div className="h-10">
                      <p className="text-xs line-clamp-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sit veritatis aperiam ut cupiditate adipisci id
                        dicta eos dolor accusantium optio expedita ad, deleniti
                        temporibus, eveniet aliquam dignissimos. Quia sapiente
                        nobis beatae accusamus cum iusto laboriosam fugiat
                        labore delectus libero veniam, debitis atque temporibus.
                        Cupiditate unde nostrum eos impedit eligendi aliqu
                      </p>
                    </div>
                    <div className="text-sm inline-flex items-center gap-2">
                      <span>
                        <Leaf className="size-5" />
                      </span>
                      <span> Farmer Name</span>
                    </div>
                    <div className="text-sm inline-flex items-center gap-2">
                      <span>
                        <LayoutGrid className="size-5" />
                      </span>
                      <span>category Name</span>
                    </div>
                    <div className="w-full inline-flex items-center justify-between">
                      <span className="text-lg">Total : 5</span>
                      <div className="px-2 py-1 flex justify-between items-center gap-2 bg-rose-50 border border-rose-300 rounded-lg text-rose-500">
                        <button>
                          <Plus />
                        </button>
                        <span>ADD</span>
                        <button>
                          <Minus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
      {cartItems?.length > 0 ? (
        <>
          <div className="font-palanquin bg-white p-4 rounded-xl">
            <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
              <p className="font-medium text-nowrap">
                Items {`(${cartItems?.length})`}
              </p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="mt-4 flex flex-col">
              {cartItems.map((item, index) => (
                <>
                  <div
                    key={item._id}
                    className="flex gap-2 py-2 hover:bg-slate-50"
                  >
                    <div className="w-[25%] h-16 bg-slate-200 rounded-md">
                      <img
                        src={item?.img}
                        alt="item-img"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="w-[75%]">
                      <p className="font-bold truncate">{item?.itemName}</p>
                      <div className="text-sm font-bold truncate">
                        ₹ {item?.price}{" "}
                        <span className="text-xs font-medium text-slate-700">
                          / {`${item?.weight?.value} ${item?.weight?.unit}`}
                        </span>
                      </div>
                      <div className="w-full inline-flex items-center justify-between">
                        <span className="">
                          Total :{" "}
                          <span className="font-medium">{item?.quantity}</span>
                        </span>
                        <div className="min-w-16 max-w-20 text-sm flex justify-between items-center bg-rose-50 border border-rose-300 rounded-md text-rose-500">
                          <button
                            className="p-1"
                            onClick={() => {
                              console.log("Add btn-clicked");
                              dispatch(incrementItem(item?._id));
                            }}
                          >
                            <Plus className="size-4" />
                          </button>
                          <span>{item?.quantity}</span>
                          <button
                            className="p-1"
                            onClick={(e) => {
                              console.log("Minus btn-clicked");
                              dispatch(decrementItem(item?._id));
                            }}
                          >
                            <Minus className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
          <div className="font-palanquin bg-white p-4 rounded-xl">
            <div className="font-montserrat inline-flex items-center gap-x-2 w-full">
              <p className="font-medium">Details</p>
              <hr className="w-full text-gray-900" />
            </div>
            <div className="my-2 flex flex-col gap-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-[10%]">
                  <Receipt />
                </span>
                <div className="w-[50%]">
                  <h2 className="font-medium">To Pay</h2>
                  <p className="text-gray-600 truncate">
                    Include of all taxes and charges
                  </p>
                </div>
                <div className="w-[30%] text-lg">
                  <p className="text-xs">Total</p>
                  <p>₹245</p>
                </div>
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: 350,
                      behavior: "smooth",
                    });
                  }}
                  className="w-[10%]"
                >
                  <ChevronRight />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-[10%]">
                  <AlertTriangle />
                </span>
                <div className="w-[50%]">
                  <h2 className="font-medium">Delivery Instructions</h2>
                  <p className="text-gray-600 truncate">
                    Read the following instructions
                  </p>
                </div>
                <div className="w-[30%] text-lg"></div>
                <span className="w-[10%]">
                  <ChevronRight />
                </span>
              </div>
            </div>
          </div>
          <div className="font-palanquin bg-white p-4 rounded-xl">
            <div className="inline-flex items-center gap-x-2 w-full mb-4">
              <p className="font-montserrat font-medium">Receipt</p>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-montserrat font-semibold text-gray-700">
                    Farmer Name
                  </p>
                  <p className="text-sm text-gray-500">123 Business Street</p>
                  <p className="text-sm text-gray-500">City, Country, 12345</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Date: 20th Dec 2024</p>
                  <p className="text-sm text-gray-500">Receipt #123456</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="font-montserrat text-xs uppercase text-rose-800 bg-rose-50">
                    <tr>
                      <th className="px-4 py-2">Item</th>
                      <th className="px-4 py-2 text-right">Quantity</th>
                      <th className="px-4 py-2 text-right">Price</th>
                      <th className="px-4 py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((item) => (
                      <tr key={item?._id} className="border-b">
                        <td className="px-4 py-2">{item?.itemName}</td>
                        <td className="px-4 py-2 text-right">
                          {item?.quantity}
                        </td>
                        <td className="px-4 py-2 text-right">{item?.price}</td>
                        <td className="px-4 py-2 text-right">
                          ₹ {item?.quantity * item?.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="text-sm font-semibold text-gray-700">
                    <tr>
                      <td className="px-4 py-2 text-right" colSpan="3">
                        Subtotal
                      </td>
                      <td className="px-4 py-2 text-right">$35.00</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-right" colSpan="3">
                        Tax (10%)
                      </td>
                      <td className="px-4 py-2 text-right">$3.50</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-right" colSpan="3">
                        Total
                      </td>
                      <td className="px-4 py-2 text-right">$38.50</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="text-center text-xs text-gray-500 mt-6">
                <p>Thank you for your purchase!</p>
                <p>If you have any questions, contact support@company.com</p>
              </div>
            </div>
          </div>
          <OrderPlaced />
        </>
      ) : (
        <div className="bg-white p-4 rounded-xl">
          <div className="inline-flex items-center gap-x-2 w-full">
            <p className="font-medium text-nowrap">Items (0)</p>
            <hr className="w-full text-gray-900" />
          </div>
          <div className="px-4">
            <div className="mx-auto w-60 h-full">
              <img
                className="w-full h-full object-cover"
                loading="lazy"
                src={cart}
                alt="empty-cart"
              />
            </div>
            <p className="my-2 text-sm text-gray-700 text-center">
              Nothing to show right now! Add item to cart to see here. Continue
              shopping...
            </p>
            {/* <Link to={"/"}>
                      <div className="inline-flex items-center justify-center w-full px-4 py-1 bg-violet-600 text-lg text-white font-medium rounded-lg">
                        Continue Shopping <ArrowRight />
                      </div>
                    </Link> */}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 right-0 left-0 text-center px-5 py-2 bg-white md:px-44 md:mx-20 lg:mx-52">
        <button className="w-full uppercase font-medium py-2 bg-rose-500 text-white rounded-lg">
          {cartItems?.length > 0 ? "ORDER" : "Continue Shopping"}
        </button>
      </div>
    </>
  );
};

export default Cart;
