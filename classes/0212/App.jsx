import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {
  let Component;
  const path = window.location.pathname;
  
  if (path === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <>
      <Header />
      <Component />
    </>
  )
}

export default App;