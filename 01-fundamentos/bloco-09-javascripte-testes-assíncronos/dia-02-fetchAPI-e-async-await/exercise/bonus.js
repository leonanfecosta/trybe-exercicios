const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coins;
};

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const endpoint = '/currencies/usd.min.json';
  const url = baseUrl.concat(endpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((responseData) => responseData.usd)
    .catch((err) => err.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('criptoContainer');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();
