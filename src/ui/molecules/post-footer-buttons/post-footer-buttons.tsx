import {
  ButtonIcon,
  BigArrowUpIcon,
  BigArrowDownIcon,
  MessageIcon,
  ShareIcon,
} from '@ui';
import { FC } from 'react';
import { View } from 'react-native';
import { PostFooterButtonsStyle } from './post-footer-buttons-style';

type PostFooterButtonsProps = {
  upVote: number;
  comment: number;
};

export const PostFooterButtons: FC<PostFooterButtonsProps> = ({
  upVote,
  comment,
}) => {
  return (
    <View
      style={[PostFooterButtonsStyle.container, PostFooterButtonsStyle.row]}
    >
      <View style={[PostFooterButtonsStyle.row, PostFooterButtonsStyle.gap8]}>
        <View
          style={[
            PostFooterButtonsStyle.buttonWrapper,
            PostFooterButtonsStyle.row,
          ]}
        >
          <ButtonIcon
            leftIcon={<BigArrowUpIcon />}
            label={`${upVote}`}
            style={{
              button: [
                PostFooterButtonsStyle.button,
                PostFooterButtonsStyle.upvoteButton,
              ],
              label: PostFooterButtonsStyle.buttonLabel,
            }}
          />
          <ButtonIcon
            leftIcon={<BigArrowDownIcon />}
            style={{
              button: PostFooterButtonsStyle.button,
            }}
          />
        </View>
        <View style={PostFooterButtonsStyle.buttonWrapper}>
          <ButtonIcon
            leftIcon={<MessageIcon />}
            label={`${comment}`}
            style={{
              button: PostFooterButtonsStyle.button,
              label: PostFooterButtonsStyle.buttonLabel,
            }}
          />
        </View>
      </View>
      <View style={PostFooterButtonsStyle.buttonWrapper}>
        <ButtonIcon
          leftIcon={<ShareIcon />}
          style={{
            button: PostFooterButtonsStyle.button,
          }}
        />
      </View>
    </View>
  );
};
