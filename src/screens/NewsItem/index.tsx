import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, useWindowDimensions, ScrollView} from 'react-native';
import tw from 'twrnc';
import RenderHtml from 'react-native-render-html';
import {Card, Text} from 'react-native-paper';

import {NewsSkeletonLoader, ScreenProps, Screens, useAppDispatch} from 'shared';
import {NewsItem, newsModel} from 'entities';

interface NewsItemScreenProps {}

export const NewsItemScreen: React.FC<
  NewsItemScreenProps & ScreenProps<Screens.NEWS_ITEM>
> = React.memo(({route, navigation}) => {
  const dispatch = useAppDispatch();
  const {width} = useWindowDimensions();

  const [news, setNews] = useState<NewsItem>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (route.params) {
      setNews(route.params);
    }
  }, [route.params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(newsModel.fetchNewsByID(route.params.id))
      .unwrap()
      .then(data => {
        setNews(data);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [route.params.id]);

  return (
    <ScrollView contentContainerStyle={tw`flex-1 flex-col justify-start p-8px`}>
      <Text variant="titleMedium" style={tw`px-8px`}>
        {route.params.title}
      </Text>
      <Card.Cover
        source={{uri: route.params.image_url}}
        style={tw`w-full p-2 bg-white`}
      />
      {isLoading && <NewsSkeletonLoader width={width} />}
      {!isLoading && news && (
        <View style={tw`px-8px`}>
          <RenderHtml source={{html: news.short_text}} contentWidth={width} />

          <RenderHtml source={{html: news.body}} contentWidth={width} />
        </View>
      )}
    </ScrollView>
  );
});
