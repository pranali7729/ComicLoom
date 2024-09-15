// import { Link } from "react-router-dom"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
// import { useDispatch } from "react-redux";
const Login = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    try {
      if (
        Values.username === "" ||
        Values.password === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:1000/api/v1/sign-in", Values);
        navigate("/profile");
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id",response.data.id);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("role",response.data.role);
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.message || "An error occurred. Please try again.");
      } else if (error.request) {
        alert("No response from server. Please try again.");
      } else {
        alert("Error: " + error.message);
      }
    }};
  return (
    <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
      <p className="text-zinc-200 text-xl">LogIn</p>
      <div className="mt-4">
        <div>
          <label htmlFor="" className="text-zinc-400">
            Username
          </label>
          <input type="text"
          className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
          placeholder="username"
          name="username"
          required
          value={Values.username}
          onChange={change}
           />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Password
          </label>
          <input type="password" 
          className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
          placeholder="password"
          name="password"
          required
          value={Values.password}
          onChange={change}
          />
        </div>
        
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:to-blue-600 transition-all duration-300 "onClick={submit}
          >LogIn
          </button>
        </div>
        <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
          Or
        </p>
        <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
          Dont Have an Account? &nbsp;
          <Link to="/SignUp" className="hover:text-blue-500">
           <u>SignUp</u>
          </Link>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Login;