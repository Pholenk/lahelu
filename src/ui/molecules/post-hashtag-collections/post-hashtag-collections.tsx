import { ButtonIcon, DollarCoinIcon, HashtagIcon } from '@ui';
import { WHITE } from '@utils';
import { FC } from 'react';
import { ScrollView } from 'react-native';
import { HashtagCollectionsStyle } from './hashtag-collections-style';

type PostHashtagCollectionsProps = { hashtags: string[] };
export const PostHashtagCollections: FC<PostHashtagCollectionsProps> = ({
  hashtags,
}) => {
  const HashtagButton = ({ hashtag }: { hashtag: string }) => {
    const isSawerButton = hashtag.toLowerCase() === 'sawer';
    const styles = {
      button: isSawerButton
        ? [HashtagCollectionsStyle.button, HashtagCollectionsStyle.buttonGold]
        : [
            HashtagCollectionsStyle.button,
            HashtagCollectionsStyle.buttonNormal,
          ],
      label: isSawerButton
        ? [
            HashtagCollectionsStyle.buttonLabel,
            HashtagCollectionsStyle.buttonGoldLabel,
          ]
        : [
            HashtagCollectionsStyle.buttonLabel,
            HashtagCollectionsStyle.buttonNormalLabel,
          ],
    };
    const icon = isSawerButton ? (
      <DollarCoinIcon color={WHITE} height={18} width={18} />
    ) : (
      <HashtagIcon height={18} width={18} />
    );

    return <ButtonIcon leftIcon={icon} label={hashtag} style={styles} />;
  };

  return (
    <ScrollView
      horizontal
      style={HashtagCollectionsStyle.container}
      contentContainerStyle={HashtagCollectionsStyle.contentContainer}
      showsHorizontalScrollIndicator={false}
    >
      {['Sawer', ...hashtags].map((hashtag) => (
        <HashtagButton hashtag={hashtag} key={hashtag} />
      ))}
    </ScrollView>
  );
};
