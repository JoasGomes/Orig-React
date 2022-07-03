import React from 'react';

const UseMemo = () => {
  const [contar, setContar] = React.useState(0);

  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto');
    console.log('aconteceu o memo');
    return localItem;
  }, []);
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default UseMemo;
