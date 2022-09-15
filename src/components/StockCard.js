import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// {
//   "status": "OK",
//   "from": "2020-10-14",
//   "symbol": "AAPL",
//   "open": 121,
//   "high": 123.03,
//   "low": 119.62,
//   "close": 121.19,
//   "volume": 151057198,
//   "afterHours": 120.81,
//   "preMarket": 121.55
//  }

//https://polygon.io/dashboard/stocks

export const StockCard = ({ ticker, open, close }) => {
  const navigation = useNavigation();

  const goToDetails = () => {
    console.log(ticker);
    navigation.navigate("Detalhes", { ticker });
  };
  return (
    <TouchableOpacity
      onPress={goToDetails}
      style={{
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis: 0,
      }}
    >
      <Text style={{ color: "red" }}>{ticker}</Text>
      <Text>{open}</Text>
      <Text>{close}</Text>
    </TouchableOpacity>
  );
};
