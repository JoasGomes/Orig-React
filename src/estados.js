import React from 'react';

const Estados = () => {
  /* const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];

  function handleClick() {
    atualizaValor(!ativoValor);
  } */

  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'joas', idade: '20' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'possui' });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'ativo' : 'inativo'}</button>
    </div>
  );
};

export default Estados;
