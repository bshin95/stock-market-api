const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const API_KEY = "1bea79a64c8741198734b36912f2ea8a";
const button = document.querySelector("#button");

const newsSection = document.querySelector("#news-tab");

let newsPage = () => {
  newsSection.innerHTML = "";
  let newsTitle = document.createElement("h2");
  newTitle.textContent = articles[i].title;
};

button.addEventListener("click", async evt => {
  evt.preventDefault();
  let response = await axios.get(`${BASE_URL}apiKey=${API_KEY}`);
});
