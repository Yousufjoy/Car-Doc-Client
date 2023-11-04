const Service = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-[300px]" src={img} alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-base font-bold text-orange-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
