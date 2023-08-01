import React from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500.50' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  function totalGasto(data) {
    let totalGasto = 0;
    for (const element of dados.compras) {
      totalGasto += parseInt(element.preco.split(' ')[1]);
    }
    return totalGasto;
  }

  const totGastos = dados.compras.map(item => Number(item.preco.replace("R$ ", ""))).reduce((a, b) => a + b);

  return (
    <>
      <div>
        <p>Nome: {totGastos}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? "Ativa" : "Inativa"}</span></p>
        <p>Total gasto: R$ {totGastos}</p>
        {!dados.ativa && <p>Já gastou muito</p>}
      </div>
    </>
  )
}

export default App;