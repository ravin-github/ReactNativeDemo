// import messaging from '@react-native-firebase/messaging';
// import notifee, {EventType} from '@notifee/react-native';

// export async function pushNotificationPermissions() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
// }

// export async  function onMessageReceived(message) {
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//   });
//   notifee.displayNotification({
//     title: message?.notification?.title,
//     body:message?.notification?.body,
//      android: {
//         channelId,
//         pressAction: {
//           id: 'default',
//         },
//       },
//   });
// }


// export default async () => {
//   notifee.onForegroundEvent( async ({ type, detail }) => {
//     if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'stop') {
//       await notifee.stopForegroundService()
//     }
//   });

//   notifee.onBackgroundEvent(async ({ type, detail }) => {
//     const { notification, pressAction } = detail;
//     await notifee.decrementBadgeCount(1);
//     if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
//       await notifee.decrementBadgeCount(1);
//       await notifee.cancelNotification(notification.id);
//     }
//   });

//   messaging().setBackgroundMessageHandler(async (message) =>{
//     onMessageReceived(message)
//     await notifee.incrementBadgeCount(1);
//   });
// }