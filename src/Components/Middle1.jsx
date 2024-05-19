import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../Components/CartContext";

export const Middle1 = () => {
  const [cartValUCtxt] = useContext(cartContext);
  const navigate = useNavigate();
  return (
    <div
      className="navbar bg-dark text-white d-flex justify-content-between"
      style={{ width: "100%", height: "60px", padding: "10px" }}
    >
      <h1>Mobile Shop</h1>
      <div className="d-flex align-items-center">
        <h6>Total Items: {cartValUCtxt.length}</h6>
        <button
          className="btn btn-primary ml-3"
          onClick={() => navigate("/cart")}
          style={{ marginLeft: "20px" }}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};
