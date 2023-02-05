import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {CreateUserWithRol} from '../services/userService';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/invalid-email') {
                }

                if (error.code === 'auth/user-not-found') {
                }

                if (error.code === 'auth/wrong-password') {
                }

                console.error(error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password, name) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(userRes => {
                console.log('User account created & signed in!');
                userRes.user
                  .updateProfile({
                    displayName: name,
                  })
                  .then(() => {
                    console.log('User details updated!');
                  });
                CreateUserWithRol(userRes.user.uid).then(() => {
                  console.log('User created with rol!');
                });
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                }

                if (error.code === 'auth/invalid-email') {
                }

                console.error(error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
