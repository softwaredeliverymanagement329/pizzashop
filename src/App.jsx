import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { Order } from "./components/order/order";

function App() {
  const [count, setCount] = useState(0);
  const [userState, setUserState] = useState("logged-out");

  const orderPizza = () => {
    setCount(count + 1);
  };

  return (
    <>
      <img className="bg-img" src="./pizza-hero.jpg" alt="Pizza" />
      <nav>
        {userState === "logged-in" ? (
          <>
            <NavLink to="/">home</NavLink> |{" "}
            <NavLink to="/order">order</NavLink>
          </>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
      </nav>
      <header>
        <NavLink to="/">
          <img className="logo" src="./pizza-shop-logo.png"></img>
        </NavLink>
        <h1>Pizza Shop v2</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home userState={userState} setUserState={setUserState} />}
          />
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          />
          <Route path="/order" element={<Order onOrder={orderPizza} />} />
        </Routes>
      </main>
      <footer>
        <p className="count-text">{count} pizzas served</p>
      </footer>
    </>
  );
}

export default App;
