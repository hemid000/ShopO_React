import "../src/App.scss";
import Cart_info from "./Components/Pages/Home/CartInfo/Cart_info";
import GamerCart from "./Components/Pages/Home/GamerWorld/GamerCart";
import CountdownCart from "./Components/Pages/Home/CountdownCart/CountdownCart";
import Products from "./Components/Pages/Home/Products/Products";
import BestProducts from "./Components/Pages/Home/BestSeller/BestProducts";
function App() {
  return (
    <main>
      <Cart_info />
      <GamerCart />
      <CountdownCart />
      <Products />
      <BestProducts />
    </main>
  );
}

export default App;
