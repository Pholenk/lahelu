import { ReactNode, useMemo } from 'react';
import {
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ButtonIconStyle } from './button-icon-style';

type ButtonIconStyleProps = {
  button?: ViewStyle;
  label?: TextStyle;
  icon?: ViewStyle | ImageStyle;
};
type ButtonIconProps = {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onPress?: () => void;
  style?: ButtonIconStyleProps;
};

export const ButtonIcon = (props: ButtonIconProps) => {
  const styles = useMemo(() => {
    return {
      button: {
        ...ButtonIconStyle.container,
        ...props?.style?.button,
        ...ButtonIconStyle.row,
      },
      label: { ...props?.style?.label },
      icon: { ...props?.style?.icon },
    };
  }, [props?.style]);

  const onPressHandler = () => {
    if (typeof props?.onPress === 'function') {
      props.onPress();
    }
  };

  const RenderIcon = ({ position }: { position: 'left' | 'right' }) => {
    const key = `${position}Icon` as keyof Pick<
      ButtonIconProps,
      'leftIcon' | 'rightIcon'
    >;

    if (props?.[key]) {
      return <View style={styles.icon}>{props?.[key]}</View>;
    }

    return null;
  };

  const RenderLabel = () => {
    if (props?.label) {
      return <Text style={styles.label}>{props?.label}</Text>;
    }

    return null;
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.button}>
        <RenderIcon position="left" />
        <RenderLabel />
        <RenderIcon position="right" />
      </View>
    </TouchableOpacity>
  );
};
