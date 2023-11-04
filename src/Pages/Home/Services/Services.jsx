import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="mt-4">
      <div className=" text-center  py-[50px] ">
        <h3 className=" text-3xl font-bold text-orange-600"> Our Services </h3>
        <h2 className=" text-5xl"> Our services </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          pariatur labore molestias <br />
          excepturi vel quod nihil officiis ipsam ipsum temporibus.
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-4  pb-[100px]">
        {services.map((service) => {
          return <Service key={service._id} service={service}></Service>;
        })}
      </div>
    </div>
  );
};

export default Services;
