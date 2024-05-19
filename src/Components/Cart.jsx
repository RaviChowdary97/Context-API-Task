import { useContext } from "react";
import cartContext from "./CartContext";
import priceContext from "./priceContext";
import discountContext from "./discountContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartUCtxt, setcartUCtxt] = useContext(cartContext);
  const [priceUCtxt, setpriceUCtxt] = useContext(priceContext);
  const [pc, setPc] = useContext(discountContext);

  const handleIncreaseQuantity = (uuid) => {
    const updatedCart = cartUCtxt.map((item) =>
      item.uuid === uuid ? { ...item, quantity: item.quantity + 1 } : item
    );
    const itemToUpdate = cartUCtxt.find((item) => item.uuid === uuid);
    const itemDiscountedPrice =
      itemToUpdate.price -
      (itemToUpdate.price * itemToUpdate.discountPercentage) / 100;

    setcartUCtxt(updatedCart);
    setpriceUCtxt((prevPrice) => prevPrice + itemToUpdate.price);
    setPc((prevPc) => prevPc + itemDiscountedPrice);
  };

  const handleRemoveFromCart = (uuid) => {
    const itemToRemove = cartUCtxt.find((item) => item.uuid === uuid);
    if (!itemToRemove) return;

    if (itemToRemove.quantity > 1) {
      const updatedCart = cartUCtxt.map((item) =>
        item.uuid === uuid ? { ...item, quantity: item.quantity - 1 } : item
      );
      setcartUCtxt(updatedCart);
    } else {
      const newCart = cartUCtxt.filter((item) => item.uuid !== uuid);
      setcartUCtxt(newCart);
    }

    const itemDiscountedPrice =
      itemToRemove.price -
      (itemToRemove.price * itemToRemove.discountPercentage) / 100;
    setpriceUCtxt((prevPrice) => prevPrice - itemToRemove.price);
    setPc((prevPc) => prevPc - itemDiscountedPrice);
  };
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <h5>Total Price: ${priceUCtxt.toFixed(2)}</h5>
          <h5>Total Price After Discount: ${pc.toFixed(2)}</h5>
        </div>
      </nav>
      <div className="container-fluid">
        {cartUCtxt.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <div className="row">
            {cartUCtxt.map((item) => (
              <div key={item.uuid} className="col-12 col-md-4 col-lg-4">
                <div
                  className="card d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: "14rem",
                    marginTop: "3%",
                    marginLeft: "3.5%",
                    height: "400px",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">
                      Discount: {item.discountPercentage}%
                    </p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <button
                        className="btn btn-success"
                        onClick={() => handleIncreaseQuantity(item.uuid)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveFromCart(item.uuid)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
