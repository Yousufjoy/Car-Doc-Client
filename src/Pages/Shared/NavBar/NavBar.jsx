import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="flex items-center justify-between flex-wrap  py-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight text-blue-300">
          Genius Car
        </span>
      </div>

      <div className="w-full flex justify-center items-center flex-grow lg:flex lg:items-center lg:w-auto">
        <div className=" gap-6 flex text-lg">
          <Link to="/"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/services"> Services</Link>
          {user?.email ? (
            <Link onClick={handleLogOut}> Logout</Link>
          ) : (
            <Link to="/login"> Login </Link>
          )}
        </div>
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Appointment
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
