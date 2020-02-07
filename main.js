google.charts.load("current", { packages: ["corechart"] });
const BASE_URL = "https://cloud.iexapis.com/stable/stock/";
const API_KEY = "pk_48f09383c18b4d0f94810f1641b48fff ";
const button = document.querySelector("#searchButton");
const stockInput = document.querySelector("#search");
const stockList = document.querySelector("#stockList");

const stockNews = document.querySelector("#stockNews");
const stockChart = document.querySelector("#stock-chart");

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

  stockList.append(companyName);
  stockList.append(companySymbol);
  stockList.append(companyPrice);
  stockList.append(dollarChange);
  stockList.append(percentChange);
  stockList.append(stockCap);
};

let searchNews = stock => {
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
    newUrl.className = `sourceUrl`;
    let newsSum = document.createElement("p");
    newsSum.textContent = stock[i].summary;
    stockNews.append(companyNews);
    stockNews.append(newImage);
    stockNews.append(newSource);
    stockNews.append(newUrl);
    stockNews.append(newsSum);
  }
};

const parseApiData = chart => {
  let cols = [];
  for (let i = 0; i < chart.length; i++) {
    const data = chart[i];
    cols.push([data.label, data.low, data.uLow, data.high, data.uHigh]);
  }
  return cols;
};

const drawChart = chartData => {
  const cols = parseApiData(chartData);
  let data = google.visualization.arrayToDataTable(cols, true);
  let options = {
    legend: "none"
  };
  let chart = new google.visualization.CandlestickChart(
    document.querySelector("#stock-chart")
  );

  chart.draw(data, options);
};

button.addEventListener("click", async e => {
  e.preventDefault();
  let response = await axios.get(
    `${BASE_URL}${stockInput.value}/batch?types=quote,news,chart&range=1m&last=10&token=${API_KEY}`
  );
  searchStock(response.data.quote);
  searchNews(response.data.news);
  drawChart(response.data.chart);

  google.charts.setOnLoadCallback(drawChart);
});
