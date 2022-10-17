import { StyleSheet, View } from "react-native";
import { DefaultTheme, IconButton, Text, Theme } from "react-native-paper";
import LikeIconOutlined from "../../assets/icons/thumb_up_FILL0_wght400_GRAD0_opsz24.svg";
import LikeIconFilled from "../../assets/icons/thumb_up_FILL1_wght400_GRAD0_opsz24.svg";

export interface VotingProps {
  score: number;
  liked: boolean;
  onVoteChange: (liked: boolean) => void;
  theme?: Theme;
}

export const Voting = ({ theme = DefaultTheme, ...props }: VotingProps) => {
  const { score, liked, onVoteChange } = props;

  const LikeIcon = liked ? LikeIconFilled : LikeIconOutlined;
  const tint = theme.colors[liked ? "primary" : "onSurface"];
  const backgroundColor = liked ? "#e7e0ec" : "#e6e6e6";

  const renderIcon = () => (
    <>
      <LikeIcon style={style.icon} fill={tint} />
      <Text variant="bodyMedium" style={[style.score, { color: tint }]}>
        {score}
      </Text>
    </>
  );

  return (
    <View>
      <IconButton
        mode="contained"
        containerColor={backgroundColor}
        onPress={() => onVoteChange(!liked)}
        style={style.button}
        icon={renderIcon}
        iconColor={tint}
      />
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    height: "auto",
  },
  icon: {
    marginTop: 12,
  },
  score: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
  },
});
