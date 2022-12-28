export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9485afe492mshf2618eab7e26179p187101jsnf9b49b61320a",
    "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const getCurrency = (fromCurrency, toCurrency, amount, setConverted) => {
  fetch(
    `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setConverted(response.result.convertedAmount);
    })
    .catch((err) => console.error(err));
};

export const getAllCurrency = (setAllCurrency) => {
  fetch(
    "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
    options
  )
    .then((response) => response.json())
    .then((response) => setAllCurrency(response))
    .catch((err) => console.error(err));
};
