import { useContext } from "react";
import cartContext from "./CartContext";
import priceContext from "./priceContext";
import discountContext from "./discountContext";

export const Middle1 = () => {
  const cartValUCtxt = useContext(cartContext);
  const priceValUCtxt = useContext(priceContext);
  const discount = useContext(discountContext);

  return (
    <>
      <div
        className="card bg-dark text-white"
        style={{ width: "100%", height: "250px", borderRadius: "0" }}
      >
        <div
          className="card-body d-flex  flex-column  justify-content-center align-items-center"
          style={{ border: "1px solid red" }}
        >
          <h1 className="card-title"> Cart-{cartValUCtxt}</h1>
          <h6 className="card-text">Total Price - ${priceValUCtxt}</h6>
          <h6 className="card-text">After Discount - ${discount}</h6>
          <h6 className="card-text">
            SHIPPING -{priceValUCtxt > 200 ? "$20 Has to pay" : "FREE"}
          </h6>
        </div>
      </div>
    </>
  );
};
