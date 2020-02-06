const BASE_URL = "https://cloud.iexapis.com/stable/stock/";
const API_KEY = "pk_5d244336a4614a55a0b0524b0b0e434b";
const button = document.querySelector("#searchButton");
const stockInput = document.querySelector("#search");
const stockList = document.querySelector("#stockList");

const stockNews = document.querySelector("#stockNews");
const stockChart = document.querySelector("#stock-chart");
// const newsTab = document.querySelector("#news-tab")

let searchStock = stock => {
  stockList.innerHTML = "";
  let companyName = document.createElement("h2");
  companyName.textContent = `${stock.companyName}`;
  let stockExchange = document.createElement("p");
  stockExchange.textContent = `${stock.primaryExchange}`;
  let companySymbol = document.createElement("p");
  companySymbol.textContent = `${stock.primaryExchange}: ${stock.symbol}`;
  let companyPrice = document.createElement("p");
  companyPrice.textContent = `Price: $${stock.latestPrice}`;
  let dollarChange = document.createElement("p");
  let dChange = (dollarChange.textContent = `Change: $${stock.change}`);
  // if (dChange > 0) {
  //   dChange.style.color = "green";
  // } else if (dChange < 0) {
  //   dChange.style.color = "red";
  // } else {
  //   dChange.style.color = "black";
  // }
  let percentChange = document.createElement("p");
  let pChange = (percentChange.textContent =
    "Percent Change: " + `${stock.changePercent}` * 100 + "%");
  // if (pChange > 0) {
  //   pChange.style.color = "green";
  // } else if (pChange < 0) {
  //   pChange.style.color = "red";
  // } else {
  //   pChange.style.color = "black";
  // }

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });
  let stockCap = document.createElement("p");
  stockCap.textContent = "Market Cap: " + formatter.format(stock.marketCap);

  // let stockNews = document.createElement("p");
  // stockNews.textContent = `${stock.};`
  stockList.append(companyName);
  // stockList.append(stockExchange);
  stockList.append(companySymbol);
  stockList.append(companyPrice);
  stockList.append(dollarChange);
  stockList.append(percentChange);
  stockList.append(stockCap);
};

let searchNews = stock => {
  // stock[i].headline
  stockNews.innerHTML = ``;
  for (let i = 0; i < 5; i++) {
    let companyNews = document.createElement("h2");
    companyNews.textContent = stock[i].headline;
    let newImage = document.createElement("img");
    newImage.innerHTML = stock[i].image;
    let newSource = document.createElement("p");
    newSource.textContent = stock[i].source;
    let newUrl = document.createElement("p");
    newUrl.textContent = stock[i].url;
    let newsSum = document.createElement("p");
    newsSum.textContent = stock[i].summary;
    stockNews.append(companyNews);
    stockNews.append(newImage);
    stockNews.append(newSource);
    // stockNews.append(newUrl);
    stockNews.append(newsSum);
  }
};

const parseApiData = () => {
  let cols = [];
  for (let i = 0; i < chart.length; i++) {
    const data = chart[i];
    console.log(data);

    cols.push([data.label, data.low, data.high]);
  }
  console.log(cols);
};

// const drawChart = () => {
//   let data = google.visualization.arrayToDataTable(
//     [[data.label, data.low, data.high]],
//     true
//   );
//   let options = {
//     legend: "none"
//   };
//   let chart = new google.visualization.CandlestickChart(
//     document.getElementsByClassName("stock-chart")
//   );

//   chart.draw(data, options);
// };

button.addEventListener("click", async evt => {
  evt.preventDefault();
  let response = await axios.get(
    `${BASE_URL}${stockInput.value}/batch?types=quote,news,chart&range=1m&last=10&token=${API_KEY}`
  );
  searchStock(response.data.quote);
  searchNews(response.data.news);
  parseApiData(response.data.chart);
  // drawChart(response.data.chart);
});
