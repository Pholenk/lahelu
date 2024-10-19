import { FC, ReactNode, useMemo } from 'react';
import { Modal, View } from 'react-native';
import { BottomSheetStyle } from './bottom-sheet-style';

type BottomSheetProps = {
  visible: boolean;
  children: ReactNode;
};

export const BottomSheet: FC<BottomSheetProps> = ({ visible, children }) => {
  const isVisible = useMemo(() => visible || false, [visible]);

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      presentationStyle="overFullScreen"
    >
      <View style={BottomSheetStyle.container}>
        <View style={BottomSheetStyle.backdrop} />
        {children}
      </View>
    </Modal>
  );
};
