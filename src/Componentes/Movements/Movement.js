import "./Movement.css";
import Moment from "react-moment";

function Movement({ position, amount, date }) {
  const type = amount > 0 ? "deposit" : "withdrawal";
  return (
    <div className="movements__row">
      <div className={`movements__type movements__type--${type}`}>
        {/*Posición empieza en 0*/}
        {position + 1} {type}
      </div>
      <div className="movements__date">
        <Moment fromNow>{date}</Moment>
      </div>
      <div className="movements__value">{amount}€</div>
    </div>
  );
}

export default Movement;
