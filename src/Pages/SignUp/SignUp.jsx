import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleRegister} className="mt-6">
            <label
              htmlFor="Name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            ></label>
            <input
              id="Name"
              type="Name"
              name="name"
              placeholder="Enter your Name"
              autoComplete="Name"
              required
              className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />

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
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-800 shadow-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            <Link to="/login">
              Already have an account?{" "}
              <span className=" text-orange-300 font-bold text-xl">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
