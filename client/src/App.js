import React from "react";
import Header from "./components/header";
import Collections from "./components/collections";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
