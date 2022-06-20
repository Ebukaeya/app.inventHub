import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import ExploreStores  from "./components/ExploreStores";
import Restaurants from "./components/Restaurants";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<ExploreStores />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter> 
  /*   <>
      <HomePage />
    </> */
  );
}

export default App;
