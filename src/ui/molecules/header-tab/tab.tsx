import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { ButtonLabel } from '@ui';
import TabStyle from './tab-style';

type HeaderTabProps = {
  labels: string[];
  activeTab: HeaderTabProps['labels'][number];
  onPress?: (key: string) => void;
};

export const HeaderTab = (props: HeaderTabProps) => {
  const { labels } = props;
  const activeKey = useMemo(
    () => props.activeTab || labels[0],
    [props.activeTab],
  );

  const onTabPressHandler = (tabKey: string) => {
    if (typeof props?.onPress === 'function') {
      props?.onPress(tabKey);
    }
  };

  const RenderTabLabel = useCallback(
    (label: string, index: number) => {
      const buttonStyle =
        label === activeKey
          ? { ...TabStyle.tabButton, ...TabStyle.tabButtonActive }
          : TabStyle.tabButton;
      const labelStyle =
        label === activeKey
          ? { ...TabStyle.tabButtonLabel, ...TabStyle.tabButtonLabelActive }
          : TabStyle.tabButtonLabel;

      return (
        <ButtonLabel
          label={label}
          onPress={() => onTabPressHandler(label)}
          key={`tab-${label}${index}`}
          style={{
            button: buttonStyle,
            label: labelStyle,
          }}
        />
      );
    },
    [activeKey, labels],
  );

  return <View style={TabStyle.container}>{labels.map(RenderTabLabel)}</View>;
};
