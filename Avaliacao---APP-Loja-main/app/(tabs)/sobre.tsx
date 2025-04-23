import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>Nome:joao douglas ziviani de lima </Text>
      <Text style={styles.text}>Curso: Engenharia de Software</Text>
      <Text style={styles.text}>Semestre: 5º</Text>
      <Text style={styles.text}>
        gosto de jogos 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: "#f5e6d3",
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
  },
});
