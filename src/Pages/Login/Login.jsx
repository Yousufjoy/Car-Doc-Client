import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        // console.log("Successfully Logged in", result.user);
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        //navigate(location?.state ? location?.state : "/");
        //get access token
        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-4xl font-bold text-center">Log in</h1>
          <form onSubmit={handleLogin} className="mt-6">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            ></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            ></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-800 shadow-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Log in
            </button>
          </form>
          <div className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            <a href="#">Forgot password?</a>
            <Link to="/signup" className=" text-orange-300 font-bold text-xl">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//JWT token secret and set token to http only cookie
