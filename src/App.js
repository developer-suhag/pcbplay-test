import "./App.css";
import Footer from "./components/Footer/Footer";
import MyOrders from "./components/MyOrders/MyOrders";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      {/* Navigation  */}
      <Navigation />
      {/* my Orders  */}
      <MyOrders />
      {/* footer  */}
      <Footer />
    </div>
  );
}

export default App;
