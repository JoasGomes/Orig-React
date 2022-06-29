import React from 'react';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const Propriedades = () => {
  return (
    <div>
      <Titulo cor="red" texto="meu titulo 1" />
      <Titulo cor="blue" texto="meu titulo 2" />
      <Titulo cor="black" texto="meu titulo 3" />
      <Titulo cor="black" texto="meu titulo 3">
        isso é o children.
      </Titulo>
    </div>
  );
};

export default Propriedades;
