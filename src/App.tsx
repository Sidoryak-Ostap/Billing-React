import "./App.css";
import BillingCard from "./components/BillingCard/BillingCard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <main className="container">
        <div className="bg-element-1"></div>
        <Header />
        <BillingCard />
      </main>
    </div>
  );
}

export default App;
