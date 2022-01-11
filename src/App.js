import "./App.css";
import MyOrders from "./components/MyOrders/MyOrders";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MyOrders />
    </div>
  );
}

export default App;
