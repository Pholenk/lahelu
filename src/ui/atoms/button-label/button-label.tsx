import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type ButtonLabelStyle = {
  button: ViewStyle;
  label: TextStyle;
};
type ButtonLabelProps = {
  label: string;
  onPress?: () => void;
  style?: ButtonLabelStyle;
};

export const ButtonLabel = (props: ButtonLabelProps) => {
  const buttonStyle = { ...props?.style?.button };
  const labelStyle = { ...props?.style?.label };
  const { label } = props;

  const onPressHandler = () => {
    if (typeof props?.onPress === 'function') {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressHandler}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
