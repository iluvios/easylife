import firestore from '@react-native-firebase/firestore';

export const CreateUserWithRol = async userId => {
  await firestore().collection('Users').add({
    userId: userId,
    rol: 'user',
  });
};

const GetRolByUserId = async userId => {
  const user = await firestore()
    .collection('Users')
    .where('userId', '==', userId)
    .get();
  console.log(user.docs[0]);
  /* return user.docs[0].data().rol; */
};

export const CheckIfAdmin = async userId => {
  const rol = await GetRolByUserId(userId);
  return rol === 'admin';
};
