import React from 'react';

const Eventos = () => {
  function handleClick(event) {
    alert('comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>camisa</button>
      <button onClick={handleClick}>bermuda</button>
    </div>
  );
};

export default Eventos;
