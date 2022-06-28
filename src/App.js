import React from 'react';

/* const App = () => {
  return <a href="https://www.origamid.com">Origamid</a>;
}; */

//className
/* const App = () => {
  return <div className="grid">origamid</div>;
}; */

//htmlFor
/* const App = () => {
  return (
    <form>
      <label htmlFor="nome">nome</label>
      <input type="text" id="nome" />
    </form>
  );
}; */

//expressões e funções
/* const App = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
}; 

const titulo = <h1>esse é meu titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return 'joas' + sobrenome;
  }
  return (
    <>
      {titulo}
      <p>
        {true ? 'dkbnopdivgbn' : 'odivop'} - {10}
        {mostrarNome(' vitor')};
      </p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
    </>
  );
}; */

//EXERCICIO
const luana = {
  cliente: 'luana',
  idade: 27,
  compras: [
    { nome: 'notebook', preco: 'R$ 2500' },
    { nome: 'geladeira', preco: 'R$ 3000' },
    { nome: 'smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'mario',
  idade: 31,
  compras: [
    { nome: 'notebook', preco: 'R$ 2500' },
    { nome: 'geladeira', preco: 'R$ 3000' },
    { nome: 'smartphone', preco: 'R$ 1500' },
    { nome: 'guitarra', preco: 'R$ 1500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'ativa' : 'inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
    </div>
  );
};
export default App;
