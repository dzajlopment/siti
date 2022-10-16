import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import LocationPicker from "./components/ReportsForm/LocationPicker";
import { ReportList } from "./features/reports/ReportList";
import Map from "./screens/Map";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReportForm from "./screens/ReportForm";
import Icons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Home() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen
				options={{
					tabBarIcon({ color, size }) {
						return <Icons name="list-outline" color={color} size={size} />;
					},
				}}
				name="Reports"
				component={ReportList}
			/>
			<BottomTab.Screen
				options={{
					tabBarIcon({ color, size }) {
						return <Icons name="add" color={color} size={size} />;
					},
					headerShown: false,
				}}
				name="Add Report"
				component={ReportForm}
			/>
		</BottomTab.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<SafeAreaProvider>
				<PaperProvider>
					<NavigationContainer>
						<Stack.Navigator initialRouteName="Home">
							<Stack.Screen
								name="Home"
								options={{ headerShown: false }}
								component={Home}
							/>
							<Stack.Screen name="Map" component={Map} />
							<Stack.Screen
								name="Add Report"
								component={ReportForm}
								options={{ headerShown: false }}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</PaperProvider>
			</SafeAreaProvider>
		</>
	);
}
