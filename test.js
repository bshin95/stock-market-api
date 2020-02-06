const chart = [
  {
    date: "2020-01-06",
    open: 440.47,
    close: 451.54,
    high: 451.56,
    low: 440,
    volume: 10157499,
    uOpen: 440.47,
    uClose: 451.54,
    uHigh: 451.56,
    uLow: 440,
    uVolume: 10157499,
    change: 0,
    changePercent: 0,
    label: "Jan 6",
    changeOverTime: 0
  },
  {
    date: "2020-01-07",
    open: 461.4,
    close: 469.06,
    high: 471.63,
    low: 453.36,
    volume: 18209138,
    uOpen: 461.4,
    uClose: 469.06,
    uHigh: 471.63,
    uLow: 453.36,
    uVolume: 18209138,
    change: 17.52,
    changePercent: 3.8801,
    label: "Jan 7",
    changeOverTime: 0.038801
  },
  {
    date: "2020-01-08",
    open: 473.7,
    close: 492.14,
    high: 498.49,
    low: 468.23,
    volume: 31199393,
    uOpen: 473.7,
    uClose: 492.14,
    uHigh: 498.49,
    uLow: 468.23,
    uVolume: 31199393,
    change: 23.08,
    changePercent: 4.9205,
    label: "Jan 8",
    changeOverTime: 0.089915
  },
  {
    date: "2020-01-09",
    open: 497.1,
    close: 481.34,
    high: 498.8,
    low: 472.87,
    volume: 28463186,
    uOpen: 497.1,
    uClose: 481.34,
    uHigh: 498.8,
    uLow: 472.87,
    uVolume: 28463186,
    change: -10.8,
    changePercent: -2.1945,
    label: "Jan 9",
    changeOverTime: 0.065996
  },
  {
    date: "2020-01-10",
    open: 481.79,
    close: 478.15,
    high: 484.94,
    low: 473.7,
    volume: 12976832,
    uOpen: 481.79,
    uClose: 478.15,
    uHigh: 484.94,
    uLow: 473.7,
    uVolume: 12976832,
    change: -3.19,
    changePercent: -0.6627,
    label: "Jan 10",
    changeOverTime: 0.058932
  },
  {
    date: "2020-01-13",
    open: 493.5,
    close: 524.86,
    high: 525.63,
    low: 492,
    volume: 26634547,
    uOpen: 493.5,
    uClose: 524.86,
    uHigh: 525.63,
    uLow: 492,
    uVolume: 26634547,
    change: 46.71,
    changePercent: 9.7689,
    label: "Jan 13",
    changeOverTime: 0.162378
  },
  {
    date: "2020-01-14",
    open: 544.26,
    close: 537.92,
    high: 547.41,
    low: 524.9,
    volume: 29061377,
    uOpen: 544.26,
    uClose: 537.92,
    uHigh: 547.41,
    uLow: 524.9,
    uVolume: 29061377,
    change: 13.06,
    changePercent: 2.4883,
    label: "Jan 14",
    changeOverTime: 0.191301
  }
];

const parseApiData = () => {
  let cols = [];
  for (let i = 0; i < chart.length; i++) {
    const data = chart[i];
    console.log(data);

    cols.push([data.label, data.low, data.high]);
  }
  console.log(cols);
};

parseApiData();
