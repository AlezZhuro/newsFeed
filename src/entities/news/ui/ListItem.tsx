import React, {useCallback} from 'react';
import {Card, Text} from 'react-native-paper';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';

import {NewsListItem} from '../model';

interface ListItemProps {
  pressHandler: (item: NewsListItem) => void;
}

export const ListItem: React.FC<ListItemProps & NewsListItem> = ({
  pressHandler,
  ...item
}) => {
  const {width} = useWindowDimensions();

  const onPress = useCallback(() => {
    pressHandler(item);
  }, [item]);

  return (
    <Card onPress={onPress}>
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Card.Cover source={{uri: item.image_url}} style={tw`my-2`} />
        <RenderHtml source={{html: item.short_text}} contentWidth={width} />
      </Card.Content>
    </Card>
  );
};
