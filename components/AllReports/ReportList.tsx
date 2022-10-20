import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Report } from "../../types/Report";
import { ReportItem } from "./ReportItem";
import { BACKEND_URL } from "@env";

export const ReportList = () => {
	const [reports, setReports] = useState<Report[]>([]);
	const navigation = useNavigation();

	useEffect(() => {
		axios.get(`${BACKEND_URL}/api/v1/reports`).then((data) => {
			setReports(data.data.data.data);
		});
	}, []);

	const renderListHeader = (): ReactElement => (
		<Button
			mode="contained"
			style={styles.header}
			onPress={() => navigation.navigate("New Report" as never)}
		>
			New report
		</Button>
	);

	const renderItem = (report: ListRenderItemInfo<Report>): ReactElement => {
		const showDivider = report.index < reports.length - 1;

		return (
			<>
				<ReportItem report={report.item} onSelect={() => {}} />
				{showDivider && <View style={styles.divider} />}
			</>
		);
	};

	const renderEmptyList = () => (
		<View
			style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
		>
			<Text variant="bodyLarge">No reports</Text>
		</View>
	);

	return (
		<FlatList
			ListHeaderComponent={renderListHeader()}
			contentContainerStyle={styles.container}
			data={reports}
			ListEmptyComponent={renderEmptyList}
			renderItem={renderItem}
		/>
	);
};

const styles = StyleSheet.create({
	header: {
		marginBottom: 10,
	},
	container: {
		padding: 16,
		flexGrow: 1,
	},
	divider: {
		height: 1,
		backgroundColor: "#ddd",
	},
});
