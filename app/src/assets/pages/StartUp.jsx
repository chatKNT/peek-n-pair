/** @format */
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

const StartUp = () => {
  return (
    <div>
      <Button text={"Dark"} className={"lightdark-button"} />
      <div className="page-backdrop">
        <div className="startup-buttons">
          <Button text={"Best Times"} className={"best-times-button"} />
          <Link to="/options">
            <button className="startup-play-button">PLAY</button>
          </Link>
          <Button text={"Rules"} className={"rules-button"} />
        </div>
      </div>
    </div>
  );
};

export default StartUp;
