import { Link } from "react-router-dom";
import "../index.css"; 

export default function BackdropLink( {to, title, background, variant="backdrop1", children}) {
  return (
    <Link to={to} className="grayscalefade">
      <div
        className={`${variant} grayscalefade`}
        style={{
          height: "400px",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="centered">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </Link>
  );
}
