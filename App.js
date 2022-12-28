import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { getCurrency, getAllCurrency } from "./utils/fetchData";
import { SelectList } from "react-native-dropdown-select-list";
export default function App() {
  const [currency, setCurrency] = useState({ from: "USD", to: "EUR" });
  const [allCurrency, setAllCurrency] = useState([]);
  const [amount, setAmount] = useState(5);
  const [converted, setConverted] = useState(0);

  useEffect(() => {
    console.log(allCurrency);
  }, []);

  useEffect(() => {
    getCurrency(currency.from, currency.to, amount, setConverted);
    getAllCurrency(setAllCurrency);
    console.log(converted);
  }, [amount, currency]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputAmount}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text>
        {currency.from}
        {currency.to}
      </Text>
      <SelectList
        data={allCurrency.map((currency) => currency.symbol)}
        style={styles.selectList}
        setSelected={(value) => setCurrency({ ...currency, from: value })}
        notFoundText="No such currency found"
      />
      <SelectList
        data={allCurrency.map((currency) => currency.symbol)}
        style={styles.selectList}
        setSelected={(value) => setCurrency({ ...currency, to: value })}
        notFoundText="No such currency found"
        searchPlaceholder="Search currency"
      />
      <Text style={styles.text}>{converted.toFixed(4)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 64,
  },
  inputAmount: {
    color: "#000",
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
  },
});
