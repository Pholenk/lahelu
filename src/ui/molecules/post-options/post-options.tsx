import { FC, ReactNode, useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PostOptionsStyle } from './post-options-style';
import { BottomSheet, ButtonIcon, CloseIcon, EllipsisIcon } from '@ui';

type PostOption = {
  label: string;
  id: string;
  icon: ReactNode;
};
type PostOptionsProps = {
  options: PostOption[];
  title: string;
  onPress?: (id: PostOption['id']) => void;
};

export const PostOptions: FC<PostOptionsProps> = ({
  options,
  title,
  ...props
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPressHandler = useCallback(
    (id: PostOption['id'] | 'close') => {
      if (typeof props?.onPress === 'function' && id !== 'close') {
        props?.onPress(id);
      }

      setIsModalVisible(false);
    },
    [props?.onPress],
  );

  const HeaderSheet = () => {
    return (
      <View style={[PostOptionsStyle.header, PostOptionsStyle.row]}>
        <Text style={PostOptionsStyle.title}>{title}</Text>
        <TouchableOpacity onPress={() => onPressHandler('close')}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    );
  };

  const BodySheet = () => {
    return (
      <View style={PostOptionsStyle.body}>
        {options?.map((option) => {
          return (
            <ButtonIcon
              leftIcon={option.icon}
              label={option.label}
              key={option.id}
              onPress={() => onPressHandler(option.id)}
              style={{
                button: PostOptionsStyle.optionItem,
                label: PostOptionsStyle.optionItemLabel,
              }}
            />
          );
        })}
      </View>
    );
  };

  const ButtonOption = () => {
    return (
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <EllipsisIcon />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ButtonOption />
      <BottomSheet visible={isModalVisible}>
        <HeaderSheet />
        <BodySheet />
      </BottomSheet>
    </>
  );
};
