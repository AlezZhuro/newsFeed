import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';

import {useAppDispatch} from 'shared/lib';
import {News, NewsItem, newsModel} from 'entities/news';
import {ScreenProps, Screens} from 'shared/routes';

interface SelectedNewsProps {}
type RouteProps = Omit<ScreenProps<Screens.NEWS_ITEM>, 'navigation'>;

export const SelectedNews: React.FC<SelectedNewsProps & RouteProps> =
  React.memo(({route}) => {
    const dispatch = useAppDispatch();
    const {width} = useWindowDimensions();

    const [news, setNews] = useState<NewsItem>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
      if (route.params) {
        setNews(route.params);
      }
    }, [route.params]);

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
      <>
        {news && (
          <News containerWidth={width} isLoading={isLoading} item={news} />
        )}
      </>
    );
  });
