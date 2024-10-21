import {
  act,
  render,
  screen,
  fireEvent,
  within,
} from '@testing-library/react-native';
import App from '../App';

describe('Home Test Suite', () => {
  beforeEach(() => {
    fetch.mockResponse(
      JSON.stringify({
        postInfos: [
          {
            postID: 'PQnC64Gr2',
            userID: 'UlKx7V3xb',
            title: 'Hehehe 😁',
            totalUpvotes: 1,
            totalDownvotes: 0,
            totalComments: 0,
            createTime: 1729351628114,
            feed: 0,
            searchVector: "'hehehe':1",
            mediaWidth: 520,
            mediaHeight: 924,
            media: 'https://cache.lahelu.com/video-PQnC64Gr2-27789',
            mediaThumbnail:
              'https://cache.lahelu.com/thumbnail-PQnC64Gr2-93278',
            sensitive: false,
            mediaType: 1,
            hashtags: ['kocak', 'random'],
            totalCoins: 0,
            ageTime: 1167609600000,
            userUsername: 'bakwan_asil_kattabury',
            userAvatar: 'https://cache.lahelu.com/avatar-UlKx7V3xb-75247',
            userPrivilege: 0,
            userPlusTime: 0,
          },
          {
            postID: 'P3rLNvwnu',
            userID: 'UUgSZtt3x',
            title: 'Atlas : Pake kali ya',
            totalUpvotes: 0,
            totalDownvotes: 0,
            totalComments: 1,
            createTime: 1729352530817,
            feed: 0,
            searchVector: "'atlas':1 'kali':3 'pake':2 'ya':4",
            mediaWidth: 800,
            mediaHeight: 800,
            media: 'https://cache.lahelu.com/image-P3rLNvwnu-28306',
            sensitive: false,
            mediaType: 0,
            pinCommentID: 'CCh23e3nxuTv',
            hashtags: ['gaming', 'game', 'mlbb', 'atlas'],
            totalCoins: 0,
            ageTime: 978307200000,
            userUsername: 'terrameme',
            userAvatar: 'https://cache.lahelu.com/avatar-UUgSZtt3x-19371',
            userPrivilege: 0,
            userPlusTime: 0,
          },
          {
            postID: 'PcppjriZd',
            userID: 'UGZeaY4hR',
            title: 'Temannya berpikir apa kira-kira🗿',
            totalUpvotes: 1,
            totalDownvotes: 0,
            totalComments: 0,
            createTime: 1729354126860,
            feed: 0,
            searchVector:
              "'apa':3 'berpikir':2 'kira':5,6 'kira-kira':4 'temannya':1",
            mediaWidth: 520,
            mediaHeight: 924,
            media: 'https://cache.lahelu.com/video-PcppjriZd-96441',
            mediaThumbnail:
              'https://cache.lahelu.com/thumbnail-PcppjriZd-63503',
            sensitive: false,
            mediaType: 1,
            hashtags: ['sus'],
            totalCoins: 0,
            ageTime: 1136073600000,
            userUsername: 'tirtha1180_',
            userAvatar: 'https://cache.lahelu.com/avatar-UGZeaY4hR-12506',
            userPrivilege: 0,
            userPlusTime: 0,
          },
        ],
        nextPage: 1,
        hasMore: true,
      }),
    );
  });
  it('should render side drawer gracefully', async () => {
    await render(<App />);
    const hamburgerIcon = await screen.findByTestId('hamburgerIcon');
    expect(hamburgerIcon).toBeOnTheScreen();
    fireEvent(hamburgerIcon, 'click');

    await act(async () => {
      const drawerScreen = await screen.findByTestId('DrawerScreen');
      expect(drawerScreen).toBeOnTheScreen();

      const clockIcon = within(drawerScreen).getByTestId('clockIcon');
      expect(clockIcon).toBeOnTheScreen();
      fireEvent(clockIcon, 'click');
      expect(clockIcon).not.toBeOnTheScreen();
    });
    await act(async () => {
      const drawerScreen = await screen.findByTestId('DrawerScreen');
      expect(drawerScreen).toBeOnTheScreen();

      const graphUpIcon = within(drawerScreen).getByTestId('graphUpIcon');
      expect(graphUpIcon).toBeOnTheScreen();
      fireEvent(graphUpIcon, 'click');
      expect(graphUpIcon).not.toBeOnTheScreen();
    });
    await act(async () => {
      const drawerScreen = await screen.findByTestId('DrawerScreen');
      expect(drawerScreen).toBeOnTheScreen();

      const otherDropdown = within(drawerScreen).getByText('Meme lain');
      expect(otherDropdown).toBeOnTheScreen();
      fireEvent(otherDropdown, 'click');
      expect(otherDropdown).not.toBeOnTheScreen();
    });
    await act(async () => {
      const drawerScreen = await screen.findByTestId('DrawerScreen');
      expect(drawerScreen).toBeOnTheScreen();

      const exploreDropdown = within(drawerScreen).getByText('Jelajah');
      expect(exploreDropdown).toBeOnTheScreen();
      fireEvent(exploreDropdown, 'click');
      expect(exploreDropdown).not.toBeOnTheScreen();
    });

    await act(async () => {
      const drawerScreen = await screen.findByTestId('DrawerScreen');
      expect(drawerScreen).toBeOnTheScreen();

      const homeIcon = within(drawerScreen).getByTestId('homeIcon');
      expect(homeIcon).toBeOnTheScreen();
      fireEvent(homeIcon, 'click');
      expect(homeIcon).not.toBeOnTheScreen();
    });

    await act(async () => {
      const drawerScreen = await screen.findByTestId('DrawerScreen');
      expect(drawerScreen).toBeOnTheScreen();

      const loginButton = within(drawerScreen).getByText('Login');
      fireEvent(loginButton, 'click');
      expect(loginButton).toBeOnTheScreen();
    });
  });

  it('should render bottom tab', async () => {
    render(<App />);

    await act(async () => {
      const homeTab = await screen.findByTestId('button-tab-Home');
      // fireEvent(homeTab, 'click');
      expect(homeTab).toBeOnTheScreen();

      const ellipsisIcons = await screen.findAllByTestId('elipsisIcon');
      expect(ellipsisIcons[0]).toBeOnTheScreen();
      await fireEvent(ellipsisIcons[0], 'press');
    });
    const sadIcon = await screen.findByTestId('sadIcon');
    expect(sadIcon).toBeOnTheScreen();
    const flagIcon = await screen.findByTestId('flagIcon');
    expect(flagIcon).toBeOnTheScreen();
    const downloadIcon = await screen.findByTestId('downloadIcon');
    expect(downloadIcon).toBeOnTheScreen();
    const imagesIcon = await screen.findByTestId('imagesIcon');
    expect(imagesIcon).toBeOnTheScreen();

    const closeIcon = await screen.findByTestId('closeIcon');
    expect(closeIcon).toBeOnTheScreen();

    await act(() => {
      fireEvent.press(sadIcon);
      fireEvent.press(flagIcon);
      fireEvent.press(downloadIcon);
      fireEvent.press(imagesIcon);
      fireEvent.press(closeIcon);
    });
    expect(sadIcon).not.toBeOnTheScreen();
    expect(flagIcon).not.toBeOnTheScreen();
    expect(downloadIcon).not.toBeOnTheScreen();
    expect(imagesIcon).not.toBeOnTheScreen();
  });

  it('should be able to change tab in home screen', async () => {
    render(<App />);

    await act(async () => {
      const homeTab = await screen.findByTestId('button-tab-Home');
      fireEvent(homeTab, 'click');
      expect(homeTab).toBeOnTheScreen();
    });

    await act(async () => {
      const freshTab = await screen.findByTestId('button-tab-Fresh');
      fireEvent(freshTab, 'click');
      expect(freshTab).toBeOnTheScreen();
    });

    await act(async () => {
      const trendingTab = await screen.findByTestId('button-tab-Trending');
      fireEvent(trendingTab, 'click');
      expect(trendingTab).toBeOnTheScreen();
    });
  });
});
