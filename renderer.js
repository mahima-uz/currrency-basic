
console.log('here')

const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
const convertButton = document.getElementById('convertButton');
console.log('idhar')
convertButton.addEventListener('click', async () => {
    console.log("heyyy i am here")
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const inputAmount = amount.value;
  const apiUrl = `https://v6.exchangerate-api.com/v6/f0cc3246c82a31608626bbd8/latest/${from}`;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then(data => {
      // Handle the JSON data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Fetch error:', error);
    });
// //   // Make an API request to ExchangeRate-API to get the conversion rate
//   try {
//     console.log(from,to,inputAmount)
//     const response = await axios.get(`https://v6.exchangerate-api.com/v6/f0cc3246c82a31608626bbd8/latest/${from}`);
//     const exchangeRates = response.data.rates;
//     console.log(response);
//     if (to in exchangeRates) {
//       const conversionRate = exchangeRates[to];
//       const convertedAmount = inputAmount * conversionRate;
//       result.innerHTML = `${inputAmount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
//     } else {
//       result.innerHTML = 'Invalid currency selection.';
//     }
//   } catch (error) {
//     result.innerHTML = 'Error fetching data from the API.';
//   }
});
