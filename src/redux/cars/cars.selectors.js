import { useSelector } from 'react-redux'

const CarDetails = ({ carId }) => {
  const car = useSelector((state) => selectCarById(state, carId));

  if (!car) {
    return <div>Car not found.</div>;
  }

  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      {/* Other car details */}
    </div>
  );
};

export default CarDetails;