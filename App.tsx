import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, Text } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Text>Hello, world</Text>
      </NavigationContainer>
    </PaperProvider>
  );
}
