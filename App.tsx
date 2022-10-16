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
import Navigation from "./navigation/Navigation";

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<SafeAreaProvider>
				<PaperProvider>
					<Navigation />
				</PaperProvider>
			</SafeAreaProvider>
		</>
	);
}
