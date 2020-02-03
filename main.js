const BASE_URL = `https://cloud.iexapis.com/stable/stock/`;
const API_KEY = "pk_5d244336a4614a55a0b0524b0b0e434b";

//provided url on iex--> https://sandbox.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=Tsk_32fb245958444ccd9ce527e23a9d8e55

// const keyword = document.getElementById("search");
const button = document.querySelector("#searchButton");
const stockInput = document.querySelector("#search");

//const BASE_URL = "https://cloud-sse.iexapis.com/stable/stocksUSNoUTP?token=${API_KEY}&symbols=${keyword}"
// const BASE_URL = `${BASE_URL}/batch?types=quote&range=1m&last=10&token=${API_KEY}`;
//use /market instead of /stock if you want to check multiple stocks at once

let searchStock = async function() {
  await axios
    .get(`${BASE_URL}`, {
      "x-api-key": API_KEY
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(error);
    });
};

button.addEventListener("click", async evt => {
  evt.preventDefault();
  const stockType = stockInput.value;
  const response = await axios.get(
    `${BASE_URL}${stockInput.value}/batch?types=quote&range=1m&last=10&token=${API_KEY}`
  );

  for (let i = 0; i < response.data.quote.length; i++) {
    let stockName = response.data.quote.companyName[i];
    let stockSymbol = response.data.quote.symbol[i];
    let stockPrice = response.data.quote.latestPrice[i]; //attribution href
    let stockChange = response.data.quote.change[i];
    let stockPerChange = response.data.quote.changePercent[i];
    let stockCap = response.data.quote.marketCap[i];

    let stockTable = (stockList.innerHTML += `
        <tr>
          <td>${stockName}</td>
          <td>${stockSymbol}</td>
          <td>${stockPrice}</td>
          <td>${stockChange}</td>
          <td>${stockPerChange}</td>
          <td>${stockCap}</td>
        </tr>`);
  }
  console.log("button click", response);
});

// console.log("button clicked", response);

// for (let i = 0; i < response.data.quote.length; i++) {
// let stockName = response.data.quote.companyName[i];
// let stockSymbol = response.data.quote.symbol[i];
// let stockPrice = response.data.quote.latestPrice[i]; //attribution href
// let stockChange = response.data.quote.change[i];
// let stockPerChange = response.data.quote.changePercent[i];
// let stockCap = response.data.quote.marketCap[i];

// let stockTable = (stockList.innerHTML += `
//   <tr>
//     <td>${stockName}</td>
//     <td>${stockSymbol}</td>
//     <td>${stockPrice}</td>
//     <td>${stockChange}</td>
//     <td>${stockPerChange}</td>
//     <td>${stockCap}</td>
//   </tr>`);
// }
