import { View } from 'react-native';
import { HeaderTab } from '@ui';
import { useState } from 'react';

export const HomeTemplate = () => {
  const TabsTitle = ['Home', 'Fresh', 'Trending'];
  const [activeTab, setActiveTab] = useState(TabsTitle[0]);

  return (
    <View>
      <HeaderTab
        labels={TabsTitle}
        activeTab={activeTab}
        onPress={setActiveTab}
      />
    </View>
  );
};
