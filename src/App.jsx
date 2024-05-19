import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ItemUi from "./Components/ItemUi";
import { Middle1 } from "./Components/Middle1";
import Cart from "./Components/Cart";
import cartContext from "./Components/CartContext";
import priceContext from "./Components/priceContext";
import discountContext from "./Components/discountContext";

const App = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://tse1.mm.bing.net/th?id=OIP.vx-zx2OtnTERHd8IGo1W0AHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://tse1.mm.bing.net/th?id=OIP.vx-zx2OtnTERHd8IGo1W0AHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://tse2.mm.bing.net/th?id=OIP.GSegAWvA7lrvjgj-JSriswHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://tse3.mm.bing.net/th?id=OIP.P-xPOvf42M3RwKEO3bNCjAHaE7&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://tse3.mm.bing.net/th?id=OIP.P-xPOvf42M3RwKEO3bNCjAHaE7&pid=Api&P=0&h=180",
    },
  ];

  const [cartUCtxt, setcartUCtxt] = useState([]);
  const [priceUCtxt, setpriceUCtxt] = useState(0);
  const [pc, setPc] = useState(0);

  return (
    <Router>
      <discountContext.Provider value={[pc, setPc]}>
        <priceContext.Provider value={[priceUCtxt, setpriceUCtxt]}>
          <cartContext.Provider value={[cartUCtxt, setcartUCtxt]}>
            <Routes>
              <Route
                path="/"
                element={
                  <div
                    className="d-flex flex-wrap text-white"
                    style={{ gap: "3%", marginBottom: "20px" }}
                  >
                    <Middle1 />
                    {products.map((element) => (
                      <ItemUi key={element.id} {...element} />
                    ))}
                  </div>
                }
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </cartContext.Provider>
        </priceContext.Provider>
      </discountContext.Provider>
    </Router>
  );
};

export default App;
