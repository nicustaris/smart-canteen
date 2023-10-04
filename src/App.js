import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./components/Auth/SignIn.component";
import SignUp from "./components/Auth/SignUp.component";
import NotFound from "./pages/NotFound";

import "../src/scss/app.scss";

export const SearchContext = createContext();

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useState(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, [authUser]);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header
          authUser={authUser}
          setAuthUser={setAuthUser}
          cartCount={cartCount}
        />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setCartItems={setCartItems}
                    setCartCount={setCartCount}
                    cartCount={cartCount}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setCartCount={setCartCount}
                  />
                }
              />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
