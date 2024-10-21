import '@testing-library/react-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

globalThis.setImmediate = jest.requireActual('timers').setImmediate;
globalThis.clearImmediate = jest.requireActual('timers').clearImmediate;
