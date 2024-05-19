import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import cartContext from "./CartContext";
import priceContext from "./priceContext";
import discountContext from "./discountContext";

export default function ItemUi({
  id,
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
    const existingItem = cartUCtxt.find((item) => item.id === id);
    if (!existingItem) {
      const newItem = {
        id,
        title,
        price,
        thumbnail,
        discountPercentage,
        quantity: 1,
        uuid: uuidv4(),
      };
      setcartUCtxt([...cartUCtxt, newItem]);
      setpriceUCtxt(priceUCtxt + price);
      setPc(pc + discountedPrice);
    }
  };

  return (
    <div
      className="card d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "14rem",
        marginTop: "3%",
        marginLeft: "3.5%",
        height: "400px",
      }}
    >
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title">${price}</h6>
          <span>⭐{rating}</span>
        </div>
        <p className="text-center">{description}</p>
        <p className="text-center">Discount-{discountPercentage}%</p>
        <p className="text-center">Available Stock- {stock}</p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={handleAddToCart}
            style={{ width: "100%" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
