import { StyleSheet } from "react-native";
import { DefaultTheme, Text, TextProps } from "react-native-paper";
import { Field, FieldProps } from "./Field";
import { InputProps } from "./Input";

export const TextField = ({ theme = DefaultTheme, ...props }: InputProps) => {
  return (
    <Field icon={props.icon}>
      <Text style={style.text} {...props}>
        {props.value}
      </Text>
    </Field>
  );
};

export type TextFieldProps = Omit<FieldProps, "children"> &
  Omit<TextProps, "theme">;

const style = StyleSheet.create({
  text: {
    textAlignVertical: "center",
    fontSize: 16,
    paddingTop: 19,
    flex: 1,
  },
});
