import React from 'react';

/* const Array = () => {
  const produtos = ['notebook', 'tablet', 'smartphone'];
  return <div>{produtos}</div>;
}; */

//modificando array
/* const Array = () => {
  const filmes = ['before sunrise', 'before sunset', 'before midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
}; */

const Array = () => {
  const livros = [
    { nome: 'a game of thrones', ano: 1996 },
    { nome: 'a clash of kings', ano: 1998 },
    { nome: 'a storm of swords', ano: 2000 },
  ];
  return (
    <ul>
      {livros
        .filter(({ ano }) => ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};

export default Array;
