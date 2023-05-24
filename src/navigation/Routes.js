import React, {useContext, useState, useEffect} from 'react';
import Toast, {BaseToast} from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {AuthContext} from './AuthProvider';
import LoadingComponent from '../components/loading';
import {turquoise, white} from '../assets/styles/const';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: turquoise,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: '100%',
        backgroundColor: turquoise,
      }}
      contentContainerStyle={{paddingHorizontal: 60}}
      text1Style={{
        fontSize: 20,
        color: white,
        fontFamily: 'Manrope-Bold',
      }}
    />
  ),
};

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);

  // Handle user state changes
  const onAuthStateChanged = userAuth => {
    setUser(userAuth);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <NavigationContainer>
      {!user ? <HomeStack /> : <AuthStack />}
      <Toast topOffset={0} config={toastConfig} />
    </NavigationContainer>
  );
};

export default Routes;
