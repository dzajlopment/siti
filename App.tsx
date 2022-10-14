import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import LocationPicker from "./components/Reports/LocationPicker";
import { ReportList } from "./features/reports/ReportList";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<PaperProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="ReportList">
						<Stack.Screen name="ReportList" component={ReportList} />
						<Stack.Screen name="AddPlace" component={LocationPicker} />
						<Stack.Screen name="Map" component={Map} />
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</>
	);
}
