import React from 'react';

function reducer(state, action) {
  console.log(action);

  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }

  /* if (action === 'aumentar') {
    return state + 1;
  }
  if (action === 'diminuir') {
    return state - 1;
  }
  return new Error('Erro action não existe'); */
}

const Reduce = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default Reduce;
