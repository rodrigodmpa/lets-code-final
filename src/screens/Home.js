import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StockCard } from "../components/StockCard";
import { StockApi } from "../service/api";

export default function Home() {
  const [tickers, setTickers] = useState([]);
  const [page, setPage] = useState(1);
  const getTickers = async () => {
    const res = await StockApi.getStocks(page);
    setTickers(res.results);
  };
  useEffect(() => {
    getTickers();
  }, [page]);
  return (
    <View style={styles.container}>
      <FlatList
        data={tickers}
        keyExtractor={(item) => item.ticker}
        renderItem={({ item }) => <StockCard ticker={item.ticker} />}
        numColumns={3}
      />
      <View>
        <View
          style={{
            flexDirection: `row`,
            justifyContent: `center`,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setPage(page + 1)}>
            <Text style={{ fontSize: 20 }}>Mostrar mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  },
});

const tickersMock = [
  {
    active: true,
    cik: "0001090872",
    composite_figi: "BBG000C2V3D6",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Agilent Technologies Inc.",
    primary_exchange: "XNYS",
    share_class_figi: "BBG001SCTQY4",
    ticker: "A",
    type: "CS",
  },
  {
    active: true,
    cik: "0001675149",
    composite_figi: "BBG00B3T3HD3",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Alcoa Corporation",
    primary_exchange: "XNYS",
    share_class_figi: "BBG00B3T3HF1",
    ticker: "AA",
    type: "CS",
  },
  {
    active: true,
    composite_figi: "BBG00X5FSP48",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "AAF First Priority CLO Bond ETF",
    primary_exchange: "ARCX",
    share_class_figi: "BBG00X5FSPZ4",
    ticker: "AAA",
    type: "ETF",
  },
  {
    active: true,
    currency_name: "USD",
    last_updated_utc: "2022-08-26T05:00:07.114Z",
    locale: "us",
    market: "otc",
    name: "ALTERNATIVE INVSTMENT TR",
    ticker: "AAAIF",
    type: "FUND",
  },
  {
    active: true,
    currency_name: "USD",
    last_updated_utc: "2022-04-01T06:49:22.884Z",
    locale: "us",
    market: "otc",
    name: "AAREAL BANK AG AKT",
    ticker: "AAALF",
    type: "OS",
  },
  {
    active: true,
    composite_figi: "BBG002628DF1",
    currency_name: "USD",
    last_updated_utc: "2022-04-01T06:49:22.984Z",
    locale: "us",
    market: "otc",
    name: "AAREAL BANK AG UNSP/ADR",
    share_class_figi: "BBG002628F57",
    ticker: "AAALY",
    type: "ADRC",
  },
  {
    active: true,
    cik: "0001708646",
    composite_figi: "BBG00LPXX872",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Goldman Sachs Physical Gold ETF Shares",
    primary_exchange: "BATS",
    share_class_figi: "BBG00LPXX8Z1",
    ticker: "AAAU",
    type: "ETF",
  },
  {
    active: true,
    composite_figi: "BBG000CWNRN5",
    currency_name: "USD",
    last_updated_utc: "2022-01-28T06:00:06.745Z",
    locale: "us",
    market: "otc",
    name: "ASIA BROADBAND INC",
    share_class_figi: "BBG001SGRBK5",
    ticker: "AABB",
    type: "CS",
  },
  {
    active: true,
    composite_figi: "BBG000BXKHJ4",
    currency_name: "USD",
    last_updated_utc: "2022-02-09T06:03:09.534Z",
    locale: "us",
    market: "otc",
    name: "ABERDEEN INTL INC",
    share_class_figi: "BBG001S6XZ90",
    ticker: "AABVF",
    type: "OS",
  },
  {
    active: true,
    cik: "0001829432",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Ares Acquisition Corporation",
    primary_exchange: "XNYS",
    ticker: "AAC",
    type: "CS",
  },
  {
    active: true,
    cik: "0001829432",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Ares Acquisition Corporation Units, each consisting of one Class A ordinary share, and one-fifth of one redeemable warrant",
    primary_exchange: "XNYS",
    ticker: "AAC.U",
    type: "UNIT",
  },
  {
    active: true,
    cik: "0001829432",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Ares Acquisition Corporation Redeemable Warrants, each whole warrant exercisable for one Class A ordinary share at an exercise price of $11.50",
    primary_exchange: "XNYS",
    ticker: "AAC.WS",
    type: "WARRANT",
  },
  {
    active: true,
    currency_name: "USD",
    last_updated_utc: "2022-06-24T14:14:05.429Z",
    locale: "us",
    market: "otc",
    name: "AAC TECHS HLDGS INC ORD",
    ticker: "AACAF",
    type: "OS",
  },
  {
    active: true,
    composite_figi: "BBG000VNTB62",
    currency_name: "USD",
    last_updated_utc: "2022-06-24T14:13:24.475Z",
    locale: "us",
    market: "otc",
    name: "AAC TECHS HLDGS UNSP/ADR",
    share_class_figi: "BBG001T3PT80",
    ticker: "AACAY",
    type: "ADRC",
  },
  {
    active: true,
    cik: "0001420529",
    composite_figi: "BBG000V2S3P6",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "ATA Creativity Global American Depositary Shares",
    primary_exchange: "XNAS",
    share_class_figi: "BBG001T125S9",
    ticker: "AACG",
    type: "ADRC",
  },
  {
    active: true,
    cik: "0001844817",
    composite_figi: "BBG011XR7306",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Armada Acquisition Corp. I Common Stock",
    primary_exchange: "XNAS",
    share_class_figi: "BBG011XR7315",
    ticker: "AACI",
    type: "CS",
  },
  {
    active: true,
    cik: "0001844817",
    composite_figi: "BBG011PFP1D1",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Armada Acquisition Corp. I Unit",
    primary_exchange: "XNAS",
    share_class_figi: "BBG011PFP285",
    ticker: "AACIU",
    type: "UNIT",
  },
  {
    active: true,
    cik: "0001844817",
    composite_figi: "BBG011XRPQV1",
    currency_name: "usd",
    last_updated_utc: "2022-09-13T00:00:00Z",
    locale: "us",
    market: "stocks",
    name: "Armada Acquisition Corp. I Warrant",
    primary_exchange: "XNAS",
    ticker: "AACIW",
    type: "WARRANT",
  },
  {
    active: true,
    composite_figi: "BBG000JVQ2Q9",
    currency_name: "USD",
    last_updated_utc: "2021-10-08T08:45:19.015Z",
    locale: "us",
    market: "otc",
    name: "AMER COMMERCE SOLTNS INC",
    share_class_figi: "BBG001SBV1Z7",
    ticker: "AACS",
    type: "CS",
  },
  {
    active: true,
    composite_figi: "BBG000RNR9L7",
    currency_name: "USD",
    last_updated_utc: "2022-08-12T05:00:19.436Z",
    locale: "us",
    market: "otc",
    name: "AURORA SOLAR TECHNOLOGIES",
    share_class_figi: "BBG001STZM33",
    ticker: "AACTF",
    type: "OS",
  },
];
