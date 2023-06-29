import React, {useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import tw from 'twrnc';

import {ListItem, NewsListItem, newsModel} from 'entities';
import {useAppSelector, useAppDispatch} from 'shared/lib';
import {Screens, customNavigatior} from 'shared';

interface NewsListProps {}

export const NewsList: React.FC<NewsListProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(newsModel.fetchNewsList());
  }, []);

  const list = useAppSelector(newsModel.selectors.list);

  const onPress = useCallback((item: NewsListItem) => {
    customNavigatior.navigate({name: Screens.NEWS_ITEM, params: item});
  }, []);

  return (
    <View style={tw`flex-1 py-8px`}>
      <FlatList
        data={list}
        renderItem={({item}) => <ListItem pressHandler={onPress} key={item.id} {...item} />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={tw`gap-4`}
      />
    </View>
  );
};
