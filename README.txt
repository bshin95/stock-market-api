##STOCK MARKET API APP

This is a stock market app to allow you to track stocks listed on various U.S. stock exchange. You must input the ticker of the stock into search bar and either press enter or the button. 

The button is running on a javascript function which will callback on three different functions. The first function will return the stock's quote, which provide information on the Company's stock value, symbol, the exchange it is listed on, the dollar value change, the percentage change, and the market cap. 

The second function will provide an aggregated news source about the Company. The news section is up to date with current events ongoing with the input stock.

Lastly, the third function is using Google Charts to draw a candlestick chart of the stock's daily high-and-low price. 

The functions that return the stock's quote and news are functions that create HTML elements. After the element is defined according to the API's data, it is then appended to a section that is already created within the HTML file. The functions also reset the innerHTML content each time the button is pressed. 

The chart is built off Google Chart. The initial function is grabbing the data within the API. The chart is specifically extracting the date labels, the stock's low and high price. With the data, the chart draws out intraday high and low of the stock's price. The second function drawChart is grabbing the data from the previous function and then creating a candlestick chart on a pre-made section in the HTML file. 

The page is running off the Iexcloud API for stock trackers. 