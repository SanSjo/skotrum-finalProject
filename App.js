import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
// using ES6 modules
import { NativeRouter, Route, Switch, Link } from 'react-router-native';
import { CommentPage } from './components/CommentPage';
import { Stockholm } from './components/Stockholm';
import { Malmo } from './components/Malmo';
import { Gbg } from './components/Gbg';
import { InfoModal } from './components/InfoModal';
import { Detail } from './components/Detail'
import { Info } from './components/Info'


const Container = Styled.View`
    height: 200px;
    width: 200px;
`;



const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        image="../assets/logomini.app.jpg"
        name="Stockholm"
        component={Stockholm}
      />
      <Stack.Screen name="Malmo" component={Malmo} />
      <Stack.Screen name="CommentPage" component={CommentPage} />
      <Stack.Screen name="Gbg" component={Gbg} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Info" component={Info} />

      {/* <Stack.Screen name="InfoModal" component={InfoModal} /> */}

    </Stack.Navigator>
  );
};




export const App = () => {


  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default App;

// import React from 'react';
// import { NativeRouter, Route, Switch, Link } from 'react-router-native';
// import { View, Text, Button, TouchableOpacity } from 'react-native';
// import { Stockholm } from './Stockholm';
// import { Comment } from './Comment';

// export const App = () => {
//   return (
//     <NativeRouter>
//       <View>
//         <Switch>
//           <Route exact path="/" component={Stockholm} />
//           <Route exact path="/Comment" component={Comment} />
//         </Switch>
//       </View>
//     </NativeRouter>
//   );
// };

// export default App;
