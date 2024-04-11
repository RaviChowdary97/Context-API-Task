import { useContext } from "react";
import cartContext from "./CartContext";
import priceContext from "./priceContext";
import discountContext from "./discountContext";

export default function ItemUi({
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
  rating,
  stock,
}) {
  const [cartUCtxt, setcartUCtxt] = useContext(cartContext);
  const [priceUCtxt, setpriceUCtxt] = useContext(priceContext);
  const [pc, setPc] = useContext(discountContext);
  const discountedPrice = price - (price * discountPercentage) / 100;

  const handleAddToCart = () => {
    setcartUCtxt(cartUCtxt + 1);
    setpriceUCtxt(priceUCtxt + price);
    setPc(pc + discountedPrice);
  };

  const handleRemoveFromCart = () => {
    if (cartUCtxt > 0) {
      setcartUCtxt(cartUCtxt - 1);
      setpriceUCtxt(priceUCtxt - price);
      setPc(pc - discountedPrice);
    }
  };
  return (
    <>
      <div
        className="card d-flex  flex-column  justify-content-center align-items-center"
        style={{
          width: "14rem",
          marginTop: "3%",
          marginLeft: "3.5%",
          height: "450px",
        }}
      >
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-title">$ {price}</h6>
            <span>⭐{rating}</span>
          </div>
          <p className="text-center">{description}</p>
          <p className="text-center">Discount-{discountPercentage}%</p>

          <p className="text-center">Available Stock- {stock}</p>

          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add
          </button>
          <button
            className="btn btn-danger"
            onClick={handleRemoveFromCart}
            style={{ marginLeft: "25px" }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
