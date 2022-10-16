import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReportList } from "../features/reports/ReportList";
import Icons from "@expo/vector-icons/Ionicons";
import ReportForm from "../screens/ReportForm";
import Map from "../screens/Map";

const Navigation = () => {
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
						tabBarStyle: {
							display: "none",
						},
					}}
					name="Add Report"
					component={ReportForm}
				/>
			</BottomTab.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					options={{ headerShown: false }}
					component={Home}
				/>
				<Stack.Screen name="Map" component={Map} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
