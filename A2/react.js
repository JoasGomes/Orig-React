const Comprar = () => {
  const [contador, setContador] = React.useState(1);

  return (
    <div>
      <p>Total: {contador}</p>
      <p>Preço: {contador * 250}</p>
      <button onClick={() => setContador(contador + 1)}>Comprar</button>
    </div>
  );
};

ReactDOM.render(<Comprar />, document.getElementById('app-react'));
