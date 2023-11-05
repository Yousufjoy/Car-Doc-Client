import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, img, price, _id } = service;
  console.log(_id);
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-[300px]" src={img} alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-base font-bold text-orange-600">${price}</p>
          <div className=" py-2 px-28">
            <Link to={`/checkout/${_id}`}>
              <button className="btn text-center">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
