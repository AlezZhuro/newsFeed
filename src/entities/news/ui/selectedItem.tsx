import React from 'react';
import {ScrollView, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';

import {NewsItem} from '..';
import {NewsSkeletonLoader} from 'shared/ui';

interface SelectedNewsProps {
  isLoading: boolean;
  item: NewsItem;
  containerWidth: number;
}

export const News: React.FC<SelectedNewsProps> = React.memo(
  ({containerWidth, isLoading, item}) => {
    return (
      <ScrollView
        contentContainerStyle={tw`flex-1 flex-col justify-start p-8px`}>
        <Text variant="titleMedium" style={tw`px-8px`}>
          {item.title}
        </Text>
        <Card.Cover
          source={{uri: item.image_url}}
          style={tw`w-full p-2 bg-white`}
        />
        {isLoading && <NewsSkeletonLoader width={containerWidth} />}
        {!isLoading && item && (
          <View style={tw`px-8px`}>
            <RenderHtml
              source={{html: item.short_text}}
              contentWidth={containerWidth}
            />

            <RenderHtml
              source={{html: item.body}}
              contentWidth={containerWidth}
            />
          </View>
        )}
      </ScrollView>
    );
  },
);
