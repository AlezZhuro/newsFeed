import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import tw from 'twrnc';

import {ScreenProps, Screens} from 'shared';
import {Text} from 'react-native-paper';
import {NewsListItem} from 'entities';

interface NewsItemScreenProps {}

export const NewsItemScreen: React.FC<
  NewsItemScreenProps & ScreenProps<Screens.NEWS_ITEM>
> = React.memo(({route}) => {
  const [news, setNews] = useState<NewsListItem | undefined>(undefined);

  useEffect(() => {
    if (route.params) {
      setNews(route.params);
    }
  }, [route.params]);

  return (
    <View style={tw`flex-1 py-8px`}>
      <Text variant="titleMedium">{news?.title}</Text>
    </View>
  );
});
