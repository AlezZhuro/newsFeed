import notifee, {EventType} from '@notifee/react-native';
import {useEffect} from 'react';

import {AppState} from 'react-native';
import {Screens, customNavigatior} from 'shared';

export const useNotification = () => {
  notifee.onBackgroundEvent(async ({detail}) => {
    const {notification} = detail;
    console.log('sendStatisticAboutEvent:', notification?.id);
  });

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        sendTestNotification();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const sendTestNotification = async () => {
    await notifee.requestPermission();

    await notifee.displayNotification({
      id: 'onEventPress',
      title: 'Awesome news!',
      body: 'Вы не поверите, но если...',
      data: {
        id: 370,
        info: 'Some information\nSome information\nSome information\nSome information\nSome information\nSome information\n',
        imgUrl:
          'https://lzone.secret-agents.ru//system/news/images/2023/06/29/370/main_api.jpg?1688042599',
      },
    });
  };

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.PRESS:
          customNavigatior.navigate({
            name: Screens.NOTIFEE,
            params: {
              data: detail.notification?.data,
              body: detail.notification?.body,
              title: detail.notification?.title,
            },
          });
          detail.notification?.id && cancel(detail.notification?.id);
          break;
      }
    });
  }, []);

  async function cancel(notificationId: string) {
    await notifee.cancelNotification(notificationId);
  }
};
