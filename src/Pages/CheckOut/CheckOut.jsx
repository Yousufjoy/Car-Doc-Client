import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const { title, price, service_id, img } = service;

  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: service_id,
      price: price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service booked Successfully");
        }
      });
  };
  return (
    <div>
      <h2 className=" text-3xl text-center  py-10 text-orange-300 font-bold">
        Book Service : {title}
      </h2>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 border my-4">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Book Now!
            </h2>
          </div>
          <form onSubmit={handleBookService} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                defaultValue={user?.name}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                defaultValue={user?.email}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-gray-400 mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Due Amount
              </label>
              <input
                id="price"
                name="price"
                type="price"
                defaultValue={price}
                autoComplete="current-password"
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Confrim Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
