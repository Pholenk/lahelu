import { Text, View } from 'react-native';
import { ButtonLabel } from '@ui';
import { LoginPanelStyle } from './login-panel-style';

export const LoginPanel = () => {
  return (
    <View style={LoginPanelStyle.container}>
      <Text style={LoginPanelStyle.title}>Mau ngepost meme kamu sendiri?</Text>
      <Text style={LoginPanelStyle.subtitle}>
        Login dengan Google sekarang!
      </Text>
      <ButtonLabel
        label="Login"
        style={{
          button: LoginPanelStyle.loginButton,
          label: LoginPanelStyle.loginButtonLabel,
        }}
      />
    </View>
  );
};
