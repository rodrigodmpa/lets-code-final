import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { apiKey, StockApi } from "../service/api";

export default function MyWallet({ route }) {
  const [ticker, setTicker] = useState(route.params?.ticker ?? "");
  const [detail, setDetail] = useState();
  const getDetails = async (t) => {
    const res = await StockApi.getStockDetail(t ?? ticker);
    setDetail(res.results);
  };

  useEffect(() => {
    if (route.params?.ticker) {
      setTicker(route.params?.ticker);
    }
    getDetails(route.params?.ticker);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>Sobre qual ação você quer saber? Ex.: TSLA</Text>
      <TextInput style={styles.input} value={ticker} onChangeText={setTicker} />
      <TouchableOpacity style={styles.button} onPress={getDetails}>
        <Text style={{ color: "white" }}>Buscar dados</Text>
      </TouchableOpacity>
      {detail && (
        <View>
          <Text>Nome: {detail.name}</Text>
          <Text>Telefone: {detail.phone_number}</Text>
          <Text>Market cap: {detail?.market_cap}</Text>
          {detail?.branding?.icon_url && (
            <Image
              source={{ uri: `${detail?.branding?.icon_url}?apiKey=${apiKey}` }}
              style={{ width: 100, height: 100 }}
            />
          )}
          <Text>Local: {detail.locale.toUpperCase()}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  },
  button: {
    padding: 8,
    margin: 8,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 8,
  },
});

const detailMock = {
  active: true,
  address: {
    address1: "ONE APPLE PARK WAY",
    city: "CUPERTINO",
    postal_code: "95014",
    state: "CA",
  },
  branding: {
    icon_url:
      "https://api.polygon.io/v1/reference/company-branding/d3d3LmFwcGxlLmNvbQ/images/2022-09-07_icon.png",
    logo_url:
      "https://api.polygon.io/v1/reference/company-branding/d3d3LmFwcGxlLmNvbQ/images/2022-09-07_logo.svg",
  },
  cik: "0000320193",
  composite_figi: "BBG000B9XRY4",
  currency_name: "usd",
  description:
    "Apple designs a wide variety of consumer electronic devices, including smartphones (iPhone), tablets (iPad), PCs (Mac), smartwatches (Apple Watch), AirPods, and TV boxes (Apple TV), among others. The iPhone makes up the majority of Apple's total revenue. In addition, Apple offers its customers a variety of services such as Apple Music, iCloud, Apple Care, Apple TV+, Apple Arcade, Apple Card, and Apple Pay, among others. Apple's products run internally developed software and semiconductors, and the firm is well known for its integration of hardware, software and services. Apple's products are distributed online as well as through company-owned stores and third-party retailers. The company generates roughly 40% of its revenue from the Americas, with the remainder earned internationally.",
  homepage_url: "https://www.apple.com",
  list_date: "1980-12-12",
  locale: "us",
  market: "stocks",
  market_cap: 2472324487680,
  name: "Apple Inc.",
  phone_number: "(408) 996-1010",
  primary_exchange: "XNAS",
  share_class_figi: "BBG001S5N8V8",
  share_class_shares_outstanding: 16070750000,
  sic_code: "3571",
  sic_description: "ELECTRONIC COMPUTERS",
  ticker: "AAPL",
  ticker_root: "AAPL",
  total_employees: 154000,
  type: "CS",
  weighted_shares_outstanding: 16070752000,
};
