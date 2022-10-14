import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import LocationPicker from "./components/Reports/LocationPicker";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<PaperProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="LocationPicker" component={LocationPicker} />
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</>
	);
}
