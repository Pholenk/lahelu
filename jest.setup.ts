import '@testing-library/react-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';
import fetchMock from 'jest-fetch-mock';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

fetchMock.enableMocks();
globalThis.setImmediate = jest.requireActual('timers').setImmediate;
globalThis.clearImmediate = jest.requireActual('timers').clearImmediate;
