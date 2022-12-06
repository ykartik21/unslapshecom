import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import { Context, ContextProvider } from "./context/context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
