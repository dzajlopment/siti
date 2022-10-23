import { StyleSheet, View } from "react-native";
import { DefaultTheme, IconButton, Text, Theme } from "react-native-paper";
import LikeIconOutlined from "../../assets/icons/thumb_up_FILL0_wght400_GRAD0_opsz24.svg";
import LikeIconFilled from "../../assets/icons/thumb_up_FILL1_wght400_GRAD0_opsz24.svg";

export interface VotingProps {
  score: number;
  liked: boolean;
  onVoteChange: (liked: boolean) => void;
  theme?: Theme;
  horizontal?: boolean;
}

export const Voting = ({ theme = DefaultTheme, ...props }: VotingProps) => {
  const { score, liked, onVoteChange } = props;

  const LikeIcon = liked ? LikeIconFilled : LikeIconOutlined;
  const tint = theme.colors[liked ? "primary" : "onSurface"];
  const backgroundColor = liked ? "#e7e0ec" : "#e6e6e6";

  const localStyle = style(props.horizontal as boolean);

  const renderIcon = () => (
    <View style={localStyle.wrapper}>
      <LikeIcon style={localStyle.icon} fill={tint} />
      <Text variant="bodyMedium" style={[localStyle.score, { color: tint }]}>
        {score}
      </Text>
    </View>
  );

  return (
    <IconButton
      mode="contained"
      containerColor={backgroundColor}
      onPress={() => onVoteChange(!liked)}
      style={[
        localStyle.button,
        props.horizontal && { flex: 1, width: "100%" },
      ]}
      icon={renderIcon}
      iconColor={tint}
    />
  );
};

const style = (horizontal: boolean) =>
  StyleSheet.create({
    button: {
      height: "auto",
      margin: 0,
    },
    wrapper: {
      display: "flex",
      padding: horizontal ? 8 : 0,
      alignItems: "center",
      flexDirection: horizontal ? "row" : "column",
    },
    icon: {
      marginTop: horizontal ? 0 : 12,
      marginRight: horizontal ? 4 : 0,
    },
    score: {
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: horizontal ? 0 : 8,
    },
  });
