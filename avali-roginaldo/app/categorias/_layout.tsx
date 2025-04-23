import { Stack } from "expo-router";

export default function CategoriasLayout() {
  return (
    <Stack>
      <Stack.Screen name="categorias" options={{ title: "Categorias" }} />
      <Stack.Screen name="[id]" options={{ title: "Produtos da Categoria" }} />
      <Stack.Screen name="produto" options={{ title: "Detalhes do Produto" }} />
    </Stack>
  );
}
