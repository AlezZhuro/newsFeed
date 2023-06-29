import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import tw from 'twrnc';

import {ListItem, newsModel} from 'entities';
import {useAppSelector, useAppDispatch} from 'shared/lib';

interface NewsListProps {}

export const NewsList: React.FC<NewsListProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(newsModel.fetchNewsList());
  }, []);

  const list = useAppSelector(newsModel.selectors.list);

  return (
    <View style={tw`flex-1 py-8px`}>
      <FlatList
        data={list}
        renderItem={({item}) => <ListItem key={item.id} {...item} />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={tw`gap-4`}
      />
    </View>
  );
};
