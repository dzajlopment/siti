import { StyleSheet } from "react-native";
import { DefaultTheme, TextInput, TextInputProps } from "react-native-paper";
import { Field, FieldProps } from "./Field";

export const Input = ({ theme = DefaultTheme, ...props }: InputProps) => {
  return (
    <Field icon={props.icon}>
      <TextInput style={style.field} mode="outlined" {...props} />
    </Field>
  );
};

export type InputProps = Omit<FieldProps, "children"> &
  Omit<TextInputProps, "theme">;

const style = StyleSheet.create({
  field: {
    flexGrow: 1,
  },
});
