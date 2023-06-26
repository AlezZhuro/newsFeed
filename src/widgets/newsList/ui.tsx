import React, {useEffect} from 'react';
import {View} from 'react-native';
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
    <View style={tw`flex-1`}>
      {!!list.length && list.map(n => <ListItem {...n} />)}
    </View>
  );
};
