import {
  act,
  render,
  screen,
  fireEvent,
  within,
} from '@testing-library/react-native';
import App from '../App';

describe.only('Home Test Suite', () => {
  it('should render side drawer gracefully', async () => {
    render(<App />);

    await act(async () => {
      const drawerScreen = screen.getByTestId('DrawerScreen');
      const hamburgerIcon = await screen.findByTestId('hamburgerIcon');
      const homeIcon = within(drawerScreen).getByTestId('homeIcon');
      const clockIcon = within(drawerScreen).getByTestId('clockIcon');
      const graphUpIcon = within(drawerScreen).getByTestId('graphUpIcon');
      const otherDropdown = within(drawerScreen).getByText('Meme lain');
      const exploreDropdown = within(drawerScreen).getByText('Jelajah');

      expect(hamburgerIcon).toBeOnTheScreen();
      expect(drawerScreen).toBeOnTheScreen();
      await fireEvent.press(clockIcon);
      await fireEvent.press(graphUpIcon);
      await fireEvent.press(homeIcon);
      await fireEvent.press(otherDropdown);
      await fireEvent.press(exploreDropdown);

      await fireEvent.press(hamburgerIcon);
      expect(clockIcon).not.toBeOnTheScreen();
      expect(graphUpIcon).not.toBeOnTheScreen();
      expect(homeIcon).not.toBeOnTheScreen();
      expect(otherDropdown).not.toBeOnTheScreen();
      expect(exploreDropdown).not.toBeOnTheScreen();
    });
  });
});
