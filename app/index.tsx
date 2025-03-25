import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Hello World</Text>
      <Text>Page 1</Text>
      <Link href="/test">Go to page 2!</Link>
    </View>
  );
}
