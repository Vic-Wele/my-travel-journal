import React from "react";
import data from "../data";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}

export default App;
