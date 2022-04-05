const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const fetchInfo = await fetch(url);
  const data = await fetchInfo.json();
  return data.data;
};
