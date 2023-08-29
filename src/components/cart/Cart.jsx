import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
const CartItem = ({ value, title, img, price, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
    <div>
      <h4> Precio/U: </h4>
      <h4>{price}€</h4>
    </div>
  </div>
);

const Cart = () => {
  const [cart, setCart] = React.useState([
    { title: "Hamburguesa con queso", img: burger1, value: 0, price: 7 },
    { title: "Hamburguesa vegetariana con queso", img: burger2, value: 0, price: 10 },
    { title: "Hamburguesa con queso y patatas fritas", img: burger3, value: 0, price: 17 }
  ]);

  const increment = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  const decrement = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, value: Math.max(0, item.value - 1) } : item
      )
    );
  };

  return (
    <section className="cart">
      <main>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            img={item.img}
            value={item.value}
            price={item.price}
            increment={() => increment(index)}
            decrement={() => decrement(index)}
          />
        ))}
        <article>
          <div>
            {cart.map((item, index) => (
              <div key={index}>
                <h5>{item.title}</h5>
                <p>Cantidad: {item.value}</p>
                <p>Precio: {item.price}</p>
                <p>IVA: {0.21}</p>
                <p>Costos de envío: € {2.30}</p>
                <p>Precio Total: {item.value * item.price * 0.21 + 2.30}</p>
                <Link to="/shipping">Envío</Link>
              </div>
            ))}
          </div>
        </article>
      </main>{" "}
    </section>
  );
};
export default Cart;