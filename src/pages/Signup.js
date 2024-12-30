import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, CircleAlert, LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";
import { api } from "../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    role: "customer",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Invalid email format.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);
      setError("");
      const res = await api.post(`/signup`, formData, {
        withCredentials: true,
      });
      if (res.status === 201) {
        setIsLoading(false);
        toast.success("Registered successfully...");
        navigate("/login");
      }
    } catch (err) {
      setIsError(true);
      setError(err?.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="md:mx-20 lg:mx-52">
      <div className="p-5 lg:mx-52 w-full min-h-screen max-h-fit bg-gradient-to-t from-purple-500 to-purple-100">
        <div>
          <Link to={"/"}>
            <div className="p-1 w-fit rounded-full bg-white">
              <ChevronLeft className="size-4" />
            </div>
          </Link>

          <p className="p-2 font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-300 text-5xl">
            Register
          </p>
        </div>

        {error && (
          <div className="my-2 mx-auto w-fit flex gap-2 justify-center items-center text-sm px-4 py-1 rounded-lg text-red-800 bg-rose-300/50 font-montserrat font-medium">
            <CircleAlert className="shrink-0 size-5" />
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mx-2 my-4 flex flex-col gap-y-2">
            <div>
              <label className="block font-medium">First Name</label>
              <input
                className={`w-full px-4 py-1 bg-white/50 shadow border-b ${
                  errors.firstName ? "border-red-500" : "border-purple-800"
                } placeholder-gray-600 focus:outline-none focus:shadow-md`}
                onChange={handleChange}
                placeholder="Enter your first name"
                value={formData.firstName}
                name="firstName"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Last Name</label>
              <input
                className={`w-full px-4 py-1 bg-white/50 shadow border-b ${
                  errors.lastName ? "border-red-500" : "border-purple-800"
                } placeholder-gray-600 focus:outline-none focus:shadow-md`}
                onChange={handleChange}
                placeholder="Enter your last name"
                value={formData.lastName}
                name="lastName"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Phone no.</label>
              <input
                className={`w-full px-4 py-1 bg-white/50 shadow border-b ${
                  errors.phone ? "border-red-500" : "border-purple-800"
                } placeholder-gray-600 focus:outline-none focus:shadow-md`}
                onChange={handleChange}
                type="number"
                placeholder="Enter your phone number"
                value={formData.phone}
                name="phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Address</label>
              <input
                className={`w-full px-4 py-1 bg-white/50 shadow border-b ${
                  errors.address ? "border-red-500" : "border-purple-800"
                } placeholder-gray-600 focus:outline-none focus:shadow-md`}
                onChange={handleChange}
                placeholder="Enter your address"
                value={formData.address}
                name="address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                className={`w-full px-4 py-1 bg-white/50 shadow border-b ${
                  errors.email ? "border-red-500" : "border-purple-800"
                } placeholder-gray-600 focus:outline-none focus:shadow-md`}
                onChange={handleChange}
                placeholder="Enter email"
                value={formData.email}
                name="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Password</label>
              <input
                className={`w-full px-4 py-1 bg-white/50 shadow border-b ${
                  errors.password ? "border-red-500" : "border-purple-800"
                } placeholder-gray-600 focus:outline-none focus:shadow-md`}
                onChange={handleChange}
                placeholder="Enter password"
                type="password"
                value={formData.password}
                name="password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="my-3 text-center">
            <button
              disabled={isLoading}
              className="mx-auto font-montserrat flex gap-1 justify-center items-center px-5 py-1 rounded-lg font-medium bg-purple-800 text-white hover:bg-purple-900"
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="animate-spin" /> <p>Signup</p>
                </>
              ) : (
                "Signup"
              )}
            </button>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-purple-100">
                Login here!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
