import React from 'react';
import {Text, View} from 'react-native';

import {NewsListItem} from '../model';

interface ListItemProps {}

export const ListItem: React.FC<ListItemProps & NewsListItem> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
