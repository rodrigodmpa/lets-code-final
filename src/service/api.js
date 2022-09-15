export const apiKey = "0gAhcv2LNaRPN8WFZzZjxCCRSNOWxpBH";
export class StockApi {
  constructor() {}

  static async getStockValues(ticker) {
    try {
      let today = new Date();
      const date = today.toISOString().split("T")[0];
      const [year, month, day] = date.split("-");

      const yesterday = `${year}-${month}-${+day - 2}`;
      const response = await fetch(
        `https://api.polygon.io/v1/open-close/${ticker.toUpperCase()}/${yesterday}?adjusted=true&apiKey=${apiKey}`
      );
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      return console.log(error.message);
    }
  }

  static async getStocks(page = 1) {
    try {
      const response = await fetch(
        `https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=${
          page * 20
        }&apiKey=${apiKey}`
      );
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      return console.log(error.message);
    }
  }

  static async getStockDetail(ticker) {
    try {
      const response = await fetch(
        `https://api.polygon.io/v3/reference/tickers/${ticker.toUpperCase()}?apiKey=${apiKey}`
      );
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      return console.log(error.message);
    }
  }
}
