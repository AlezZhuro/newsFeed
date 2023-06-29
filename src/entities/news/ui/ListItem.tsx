import React from 'react';
import {Card, Text} from 'react-native-paper';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

import {NewsListItem} from '../model';

interface ListItemProps {}

export const ListItem: React.FC<ListItemProps & NewsListItem> = ({
  title,
  image_url,
  short_text,
}) => {
  const {width} = useWindowDimensions();
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Card.Cover source={{uri: image_url}} />
        <RenderHtml source={{html: short_text}} contentWidth={width} />
      </Card.Content>
    </Card>
  );
};
