import React, {useLayoutEffect} from 'react';

import {ScreenProps, Screens} from 'shared';
import {News} from 'entities';
import {SelectedNews} from 'widgets';

interface NewsItemScreenProps {}

export const NewsScreen: React.FC<
  NewsItemScreenProps & ScreenProps<Screens.NEWS_ITEM>
> = React.memo(({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: new Date(route.params.created_at).toLocaleDateString(),
    });
  }, [navigation]);

  return (
    <>
      <SelectedNews route={route} />
    </>
  );
});
