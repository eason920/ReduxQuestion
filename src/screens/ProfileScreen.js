import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// REDUX
// import { useMappedState, useDispatch } from "redux-react-hook";
// import { changeName } from "../redux/action";

export default function ProfileScreen() {
  const [name, setName] = useState("defaultName");
  // const myNewName = useMappedState((state) => state.newName);
  // const disPatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <TextInput
        maxLength={20}
        style={styles.txtIpt}
        onChangeText={(text) => setName(text)}
        value={name}
      />

      {/* <Text>{myNewName}</Text> */}

      <Button
        title="redux 設定名字"
        onPress={() => disPatch(changeName(name))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  txtIpt: {
    height: 50,
    width: 300,
    borderWidth: 5,
    borderColor: "darkgray",
    backgroundColor: "gray",
    fontSize: 28,
    textAlign: "center",
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
});
