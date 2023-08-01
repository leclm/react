import React from "react";
import Product from "./Product";

const App = () => {
  const [data, setData] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const json = await response.json();
    setData(json);
    setCarregando(false);
  }

  return (
    <React.StrictMode>
      <button style={{margin: '0 10px'}} onClick={handleClick}>Notebook</button>
      <button style={{margin: '0 10px'}} onClick={handleClick}>Smartphone</button>
      <button style={{margin: '0 10px'}} onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && data && <Product data={data} />}
    </React.StrictMode>
  )
}

export default App;