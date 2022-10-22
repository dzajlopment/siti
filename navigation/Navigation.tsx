import Icons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IdeasListScreen } from "../features/ideas-list/IdeasListScreen";
import { NewIdeaFragment } from "../features/new-idea/NewIdeaFragment";
import AllReports from "../screens/AllReports";
import Map from "../screens/Map";
import Report from "../screens/Report";
import ReportForm from "../screens/ReportForm";

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
					component={AllReports}
				/>
				<BottomTab.Screen
					options={{
						tabBarIcon({ color, size }) {
							return <Icons name="bulb" color={color} size={size} />;
						},
					}}
					name="Ideas"
					component={IdeasListScreen}
				/>
			</BottomTab.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Map" component={Map} />
				<Stack.Screen name="New Report" component={ReportForm} />
				<Stack.Screen name="New Idea" component={NewIdeaFragment} />
				<Stack.Screen name="Report" component={Report} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
