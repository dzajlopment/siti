import { Image, StyleSheet } from "react-native";
import { List, Text } from "react-native-paper";
import { Report } from "../../types/Report";

export const ReportItem = (props: { report: Report; onSelect: () => void }) => {
	const { report, onSelect } = props;

	const description = report.description ?? "No description";
	const timestamp = new Date(report.date).toDateString();

	return (
		<List.Item
			title={report.title}
			style={style.item}
			left={() => (
				<Image
					style={style.image}
					source={{
						uri: "https://media.discordapp.net/attachments/657658801863917568/1032028119504269352/unknown.png?width=705&height=439",
					}}
				/>
			)}
			description={description}
			descriptionNumberOfLines={1}
			right={() => <Text style={style.timestamp}>{timestamp}</Text>}
			onPress={onSelect}
		/>
	);
};

const style = StyleSheet.create({
	item: {
		paddingVertical: 6,
		paddingBottom: 4,
		paddingHorizontal: 0,
	},
	image: {
		width: 80,
		height: 48,
		backgroundColor: "#eee",
		marginRight: 16,
		borderRadius: 12,
		alignSelf: "center",
	},
	timestamp: {
		marginLeft: 16,
		alignSelf: "center",
	},
});
