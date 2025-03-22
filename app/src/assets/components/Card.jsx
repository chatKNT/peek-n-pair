/** @format */

// temporary card component
const Card = ({ image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt="memory card" className="card-img" />
    </div>
  );
};

export default Card;
