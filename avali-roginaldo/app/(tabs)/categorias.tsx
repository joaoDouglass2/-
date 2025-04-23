import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { data } from "../../data";
import { Category } from "../../types/category";

const CategoriaCard = ({ categoria, onPress }: { categoria: Category; onPress: () => void }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: categoria.cover }} style={styles.image} />
    <Text style={styles.title}>{categoria.title}</Text>
  </TouchableOpacity>
);

export default function ListaCategorias() {
  const router = useRouter();

  const handleCategoriaPress = useCallback(
    (id: number) => {
      router.push({
        pathname: "/categorias/[id]",
        params: { id: id.toString() },
      });
    },
    [router]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoriaCard
            categoria={item}
            onPress={() => handleCategoriaPress(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5e6d3"
  },
  card: {
    marginBottom: 12,
    backgroundColor: "#4fffff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    padding: 10,
  },
});

