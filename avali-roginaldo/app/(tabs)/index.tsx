import {
  ScrollView,Text,FlatList,TouchableOpacity,Image,StyleSheet,View,
} from "react-native";
import { useRouter } from "expo-router";
import { data } from "../../data";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}
    >
      <Text style={styles.welcome}>Bem-vindo ao Catálogo </Text>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <FlatList
        data={data.categories.slice(0, 3)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/categorias/[id]",
                params: { id: item.id.toString() },
              })
            }
          >
            <Image source={{ uri: item.cover }} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
        Produtos em Destaque
      </Text>
      <FlatList
        data={data.products.slice(0, 5)} // mostra só os 5 primeiros
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: "/categorias/produto",
                params: { produtoId: item.id.toString() },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>
                R$ {item.price.toFixed(2)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcome: {

    backgroundColor: "#f5e6d3",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#444",
  },
  card: {
    width: 120,
    marginRight: 12,
    backgroundColor: "#4fffff",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 80,
  },
  cardTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  productCard: {
    width: 160,
    marginRight: 12,
    backgroundColor: "#555566",
    borderRadius: 10,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 100,
  },
  productInfo: {
    padding: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 13,
    color: "#000",
  },
});
