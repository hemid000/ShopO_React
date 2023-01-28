import "../src/App.scss";
import Cart_info from "./Components/Pages/Home/CartInfo/Cart_info";
import GamerCart from "./Components/Pages/Home/GamerWorld/GamerCart";
import CountdownCart from "./Components/Pages/Home/CountdownCart/CountdownCart";
function App() {
  return (
    <main>
      <Cart_info />
      <GamerCart />
      <CountdownCart />
    </main>
  );
}

export default App;
