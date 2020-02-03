const BASE_URL = "https://cloud.iexapis.com/stable/stock/";
const API_KEY = "pk_5d244336a4614a55a0b0524b0b0e434b";
const button = document.querySelector("#searchButton");
const stockInput = document.querySelector("#search");
const stockList = document.querySelector(".stockList");
let searchStock = stock => {
  stockList.innerHTML = "";
  let companyName = document.createElement("h2");
  companyName.textContent = `${stock.companyName}`;
  let companySymbol = document.createElement("h2");
  companySymbol.textContent = `${stock.symbol}`;
  let companyPrice = document.createElement("h2");
  companyPrice.textContent = `${stock.latestPrice}`;
  let dollarChange = document.createElement("h2");
  dollarChange.textContent = `${stock.change}`;
  let percentChange = document.createElement("h2");
  percentChange.textContent = `${stock.changePercent}`;
  let stockCap = document.createElement("h2");
  stockCap.textContent = `${stock.marketCap}`;
  stockList.append(companyName);
  stockList.append(companySymbol);
  stockList.append(companyPrice);
  stockList.append(dollarChange);
  stockList.append(percentChange);
  stockList.append(stockCap);
};
button.addEventListener("click", async evt => {
  evt.preventDefault();
  let response = await axios.get(
    `${BASE_URL}${stockInput.value}/batch?types=quote&range=1m&last=10&token=${API_KEY}`
  );
  searchStock(response.data.quote);
});

// let stocks = (stockList.innerHTML += `<div>
// <h1>${stockName}<h1>
// <p>Symbol: ${stockSymbol}</p>
// <p>Price: ${stockPrice}</p>
// </div>`);
// let stockTable = q(stockList.innerHTML += `
//     <tr>
//       <td>${stockName}</td>
//       <td>${stockSymbol}</td>
//       <td>${stockPrice}</td>
//       <td>${stockChange}</td>
//       <td>${stockPerChange}</td>
//       <td>${stockCap}</td>
//     </tr>`);

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
