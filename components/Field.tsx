import { StyleSheet, View } from "react-native";
import { DefaultTheme, Theme } from "react-native-paper";
import { SvgProps } from "react-native-svg";

export const Field = ({ theme = DefaultTheme, ...props }: FieldProps) => {
  const iconColor = theme.colors.onSurface;

  return (
    <View style={style.container}>
      <props.icon width={24} height={24} fill={iconColor} style={style.icon} />
      {props.children}
    </View>
  );
};

export type FieldProps = {
  icon: React.FC<SvgProps>;
  children: React.ReactNode;
  theme?: Theme;
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 19,
    marginEnd: 16,
  },
});
