import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, createContext, useContext, useEffect } from 'react';
import TabOneScreen from './src/screens/TabOneScreen';
import ModalScreen from './src/screens/ModalScreen';

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={TabOneScreen}>
      <Stack.Screen name='Home' component={TabOneScreen} />
      <Stack.Screen name='Chat' component={ModalScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, ActivityIndicator } from 'react-native';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './config/firebase';
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Chat from './screens/Chat';
// import Home from './screens/Home';

// const Stack = createStackNavigator();
// const AuthenticatedUserContext = createContext({});

// const AuthenticatedUserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
// return (
//     <AuthenticatedUserContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthenticatedUserContext.Provider>
//   );
// };

// function ChatStack() {
//   return (
//     <Stack.Navigator defaultScreenOptions={Home}>
//       <Stack.Screen name='Home' component={Home} />
//       <Stack.Screen name='Chat' component={Chat} />
//     </Stack.Navigator>
//   );
// }

// function AuthStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='Login' component={Login} />
//       <Stack.Screen name='Signup' component={Signup} />
//     </Stack.Navigator>
//   );
// }

// function RootNavigator() {
//   const { user, setUser } = useContext(AuthenticatedUserContext);
//   const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
//     // onAuthStateChanged returns an unsubscriber
//     const unsubscribeAuth = onAuthStateChanged(
//       auth,
//       async authenticatedUser => {
//         authenticatedUser ? setUser(authenticatedUser) : setUser(null);
//         setIsLoading(false);
//       }
//     );
// // unsubscribe auth listener on unmount
//     return unsubscribeAuth;
//   }, [user]);
// if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size='large' />
//       </View>
//     );
//   }

// return (
//     <NavigationContainer>
//       {user ? <ChatStack /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <AuthenticatedUserProvider>
//       <RootNavigator />
//     </AuthenticatedUserProvider>
//   );
// }