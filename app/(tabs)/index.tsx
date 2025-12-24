import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24, color: "white"}}>
        Contador: {counter}
      </Text>

      <Pressable
        onPress={() => setCounter(counter + 1)}
        style={{
          backgroundColor: "#1976D2",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Incrementar
        </Text>
      </Pressable>
    </View>
  );
}
