import React from 'react';

const Estados2 = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItens] = React.useState(['item1']);

  function handleClick() {
    setContar((contar) => {
      setItens((items) => [...items, 'item' + (contar + 1)]);
      return contar + 1;
    });
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default Estados2;
