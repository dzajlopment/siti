import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { MD3Colors, Text } from "react-native-paper";
import { Input } from "../../components/Input";

import JustificationIcon from "../../assets/icons/handshake_FILL0_wght400_GRAD0_opsz24.svg";
import LightbulbIcon from "../../assets/icons/lightbulb_FILL0_wght400_GRAD0_opsz24.svg";
import PriceIcon from "../../assets/icons/sell_FILL0_wght400_GRAD0_opsz24.svg";
import DescriptionIcon from "../../assets/icons/subject_FILL0_wght400_GRAD0_opsz24.svg";

export const NewIdeaFragment = (props: {
  navigation: NativeStackNavigationProp<any>;
}) => {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={style.action} onPress={() => {}}>
          Press meh
        </Text>
      ),
    });
  }, []);

  return (
    <View style={style.container}>
      <Input icon={LightbulbIcon} label="Subject" />
      <Input
        icon={DescriptionIcon}
        label="Description"
        numberOfLines={4}
        multiline
      />
      <Input
        icon={JustificationIcon}
        label="Justification"
        numberOfLines={4}
        multiline
      />
      <Input icon={PriceIcon} label="Price" keyboardType="numeric" />
    </View>
  );
};

const style = StyleSheet.create({
  action: {
    color: MD3Colors.primary40,
  },
  container: {
    padding: 16,
  },
});
