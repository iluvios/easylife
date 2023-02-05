import firestore from '@react-native-firebase/firestore';

export const CreateVideoDocument = async () => {
  await firestore()
    .collection('Videos')
    .add({
      title: 'Ejemplo sebas',
      author: 'Yeison',
      image: 'bg-supreme-3.png',
      video: 'sample-3.mp4',
    })
    .then(() => {
      console.log('Video added!');
    });
};
