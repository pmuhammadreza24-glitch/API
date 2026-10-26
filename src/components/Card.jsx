import Text from "./Text";
import Button from "./Button";

function Card({ title, description, buttonText, onClick }) {
  return (
    <div className="card">

      <Text
        text={title}
        className="card-title"
      />

      <Text
        text={description}
        className="card-description"
      />

      <Button
        title={buttonText}
        className="card-button"
        onClick={onClick}
      />

    </div>
  );
}

export default Card;