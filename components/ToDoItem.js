import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 20,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    fontSize: 20,
  },
});
