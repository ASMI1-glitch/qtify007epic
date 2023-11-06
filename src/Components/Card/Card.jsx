import './Card.css';

const Card = ({ image, text, title }) => {
  return (
    <div className="card-box">
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-text">
          <p>{text}</p>
        </div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
