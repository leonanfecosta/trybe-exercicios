const setCoins = async () => {
  // criar lista de moedas
  const coins = await fetchCoins();
  const coinsList = document.querySelector('#coins-list');
  const ol = document.querySelector('#new-list');

  coins.forEach((coin) => {
    const li = document.createElement('li');

    li.innerText = `${coin.name}(${coin.symbol}) = ${Number(coin.priceUsd).toFixed(4)}`;

    coinsList.appendChild(li);
  });

  // criar lista de favoritas e salvar no localStorage
  coinsList.addEventListener('click', (event) => {
    ol.appendChild(event.target);
    localStorage.setItem('favoriteCoins', ol.innerHTML);
  });

  ol.addEventListener('click', (event) => {
    coinsList.appendChild(event.target);
  });
};

window.onload = async () => {
  // chamar função setCoins
  await setCoins();

  // carregar localStorage
  try {
    const ol = document.querySelector('#new-list');
    ol.innerHTML = localStorage.getItem('favoriteCoins');
  } catch (err) {
    console.log(err);
  }
};
