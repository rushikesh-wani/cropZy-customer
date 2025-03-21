import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, CircleAlert, LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";
import { api } from "../services/api";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post(`/login`, formData, {
        withCredentials: true,
      });

      if (res.status === 200 && res.data?.data?.role === "customer") {
        localStorage.setItem("isAuthenticated", "true");
        toast.success(`${res?.data?.message}`);
        navigate("/");
        return;
      }
    } catch (err) {
      setIsError(true);
      setError(err?.response?.data?.message || "Something went wrong.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative md:mx-20 lg:mx-52">
      <div className="-z-40 absolute top-0 w-full min-h-screen bg-gradient-to-t from-[#f9c795] to-[#f8f4f0]"></div>
      <div className="p-5 lg:mx-52">
        <div className="">
          <Link to={"/"}>
            <div className="p-1 w-fit rounded-full bg-white">
              <ChevronLeft className="size-4" />
            </div>
          </Link>

          <p className="p-2 font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-500 to-orange-700 text-5xl">
            cropZY
          </p>
        </div>

        <div className="my-5 font-bold text-4xl text-gray-800">
          Get
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800">
            Farm Fresh
          </p>
          products <p>direct from the</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800">
            Farmers
          </p>
        </div>
        {error && (
          <div className="mx-auto w-fit flex gap-2 justify-center items-center text-center text-sm px-4 py-1 rounded-lg text-red-800 bg-rose-300/50 font-montserrat font-medium">
            <CircleAlert className="size-4" />
            <p>{error}</p>
          </div>
        )}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  className="w-full px-4 py-1 bg-white border border-[#e5e7eb] rounded-lg focus:ring-0 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Enter email"
                  value={formData.email}
                  name="email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <input
                  className="w-full px-4 py-1 bg-white border border-[#e5e7eb] rounded-lg focus:ring-0 focus:outline-none"
                  onChange={handleChange}
                  placeholder="Enter password"
                  type="password"
                  value={formData.password}
                  name="password"
                />
              </div>
              <div className="mx-auto">
                <button
                  type="submit"
                  className="font-montserrat px-5 py-1 rounded-lg font-medium bg-orange-600 text-white hover:bg-orange-500 flex items-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <LoaderCircle className="size-5 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <p className="text-center">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-orange-500">
                  Register here!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
