//javascript
const total = document.getElementById('total');
const preco = document.getElementById('preco');
const button = document.getElementById('button');

let contador = 1;

function atualizarValores() {
  total.innerText = contador;
  preco.innerText = contador * 250;
}
atualizarValores(contador);

function handleClick() {
  contador = contador + 1;
  atualizarValores(contador);
}
button.addEventListener('click', handleClick);
