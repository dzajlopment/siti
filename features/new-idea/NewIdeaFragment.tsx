import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../../components/Input";
import { BACKEND_URL } from "@env";
import JustificationIcon from "../../assets/icons/handshake_FILL0_wght400_GRAD0_opsz24.svg";
import LightbulbIcon from "../../assets/icons/lightbulb_FILL0_wght400_GRAD0_opsz24.svg";
import PriceIcon from "../../assets/icons/sell_FILL0_wght400_GRAD0_opsz24.svg";
import DescriptionIcon from "../../assets/icons/subject_FILL0_wght400_GRAD0_opsz24.svg";
import axios from "axios";

export const NewIdeaFragment = (props: {
	navigation: NativeStackNavigationProp<any>;
}) => {
	const { navigation } = props;

	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	const [justification, setJustification] = useState("");
	const [price, setPrice] = useState("");

	const submitHandler = () => {
		console.log(subject);

		const response = axios
			.post(`${BACKEND_URL}/api/v1/ideas`, {
				title: subject,
				description,
				justification,
				cost: price,
			})
			.catch((err) => console.log(err));
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => <Button onPress={submitHandler}>PUBLISH</Button>,
		});
	}, []);

	return (
		<View style={style.container}>
			<Input
				icon={LightbulbIcon}
				label="Subject"
				value={subject}
				onChangeText={(subject) => setSubject(subject)}
			/>
			<Input
				icon={DescriptionIcon}
				label="Description"
				numberOfLines={4}
				multiline
				value={description}
				onChangeText={(description) => setDescription(description)}
			/>

			<Input
				icon={JustificationIcon}
				label="Justification"
				numberOfLines={4}
				multiline
				value={justification}
				onChangeText={(justification) => setJustification(justification)}
			/>
			<Input
				icon={PriceIcon}
				label="Price"
				keyboardType="numeric"
				value={price}
				onChangeText={(price) => setPrice(price)}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		padding: 16,
	},
});
