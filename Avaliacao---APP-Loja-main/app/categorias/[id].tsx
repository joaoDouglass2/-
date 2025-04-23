import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { data } from "../../data";
import { Product } from "../../types/product";
import { Ionicons } from "@expo/vector-icons";

export default function ProdutosDaCategoria() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [produtos, setProdutos] = useState<Product[]>([]);

  useEffect(() => {
    const filtrados = data.products.filter((p) => p.idCategory === Number(id));
    setProdutos(filtrados);
  }, [id]);

  return (
    <View style={styles.container}>
      {/* Botão de Voltar com ícone */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/categorias")}
      >
        <Ionicons name="arrow-back" size={24} color="#5A4636" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/categorias/produto",
                params: { produtoId: item.id.toString() },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5D0", 
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#5A4636", 
  },
  card: {
    flexDirection: "row",
    marginBottom: 12,
    backgroundColor: "#F5DEB3",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 80,
    height: 80,
  },
  content: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5A4636",
  },
  price: {
    fontSize: 14,
    color: "#7C674A", 
  },
});
