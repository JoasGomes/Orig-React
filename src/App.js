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
}; */

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
};
export default App;
