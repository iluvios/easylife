import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconImageComponent from '../components/iconImage';
import MessagesIcon from '../assets/icons/messages.png';
import Searchcon from '../assets/icons/search.png';
import HomeIcon from '../assets/icons/home.png';

import LoadingScreen from '../screens/loading';
import ArriveMapScreen from '../screens/arriveMap';
import CancelScreen from '../screens/cancelService';
import Dashboard from '../screens/dashboard';
import ExploreScreen from '../screens/explore';
import FaqsScreen from '../screens/faqs';
import GreetScreen from '../screens/greet';
import HireScreen from '../screens/hire';
import OnTheWayMapScreen from '../screens/onTheWayMap';
import ProfileScreen from '../screens/profile';
import ProgrammingScreen from '../screens/programming';
import RateScreen from '../screens/rate';
import RequestServiceScreen from '../screens/requestService';
import ScheduledScreen from '../screens/scheduled';
import ScheduleScreen from '../screens/schedule';
import SearchMapScreen from '../screens/searchMap';
import SelectScreen from '../screens/select';
import ServiceScreen from '../screens/service';
import ServicesScreen from '../screens/services';
import SupportScreen from '../screens/support';
import TermsScreen from '../screens/terms';
import {
  loading,
  buscandoMap,
  agendar,
  calificar,
  canceladoMap,
  contratar,
  dashboard,
  enCaminoMap,
  explorar,
  faqs,
  llegoMap,
  perfil,
  programados,
  programando,
  saludo,
  seleccionar,
  servicio,
  servicios,
  solicitar,
  support,
  terminos,
} from '../util/const';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={loading}
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name={dashboard}
        component={Dashboard}
        options={{
          headerStyle: {
            backgroundColor: "#fffffff",
          },
          tabBarIcon: ({ color }) => (
            <IconImageComponent
              image={HomeIcon}
              width={25}
              height={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={explorar}
        component={ExploreScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fffffff",
          },
          tabBarIcon: ({ color }) => (
            <IconImageComponent
              image={Searchcon}
              width={25}
              height={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={support}
        component={FaqsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#fffffff",
          },
          tabBarIcon: ({ color }) => (
            <IconImageComponent
              image={MessagesIcon}
              width={25}
              height={25}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={loading}
        component={LoadingScreen}
        options={{ tabBarLabel: () => <Text>loading</Text> }}
      />
      <Tab.Screen
        name={buscandoMap}
        component={SearchMapScreen}
        options={{ tabBarLabel: () => <Text>buscandoMap</Text> }}
      />
      <Tab.Screen
        name={agendar}
        component={ScheduleScreen}
        options={{ tabBarLabel: () => <Text>agendar</Text> }}
      />
      <Tab.Screen
        name={calificar}
        component={RateScreen}
        options={{ tabBarLabel: () => <Text>calificar</Text> }}
      />
      <Tab.Screen
        name={canceladoMap}
        component={CancelScreen}
        options={{ tabBarLabel: () => <Text>canceladoMap</Text> }}
      />
      <Tab.Screen
        name={contratar}
        component={HireScreen}
        options={{ tabBarLabel: () => <Text>contratar</Text> }}
      />      
      <Tab.Screen
        name={enCaminoMap}
        component={OnTheWayMapScreen}
        options={{ tabBarLabel: () => <Text>enCaminoMap</Text> }}
      />
      <Tab.Screen
        name={explorar}
        component={ExploreScreen}
        options={{ tabBarLabel: () => <Text>explorar</Text> }}
      />
      <Tab.Screen
        name={faqs}
        component={FaqsScreen}
        options={{ tabBarLabel: () => <Text>faqs</Text> }}
      />
      <Tab.Screen
        name={llegoMap}
        component={ArriveMapScreen}
        options={{ tabBarLabel: () => <Text>llegoMap</Text> }}
      />
      <Tab.Screen
        name={perfil}
        component={ProfileScreen}
        options={{ tabBarLabel: () => <Text>perfil</Text> }}
      />
      <Tab.Screen
        name={programados}
        component={ScheduledScreen}
        options={{ tabBarLabel: () => <Text>programados</Text> }}
      />
      <Tab.Screen
        name={programando}
        component={ProgrammingScreen}
        options={{ tabBarLabel: () => <Text>programando</Text> }}
      />
      <Tab.Screen
        name={saludo}
        component={GreetScreen}
        options={{ tabBarLabel: () => <Text>saludo</Text> }}
      />
      <Tab.Screen
        name={seleccionar}
        component={SelectScreen}
        options={{ tabBarLabel: () => <Text>seleccionar</Text> }}
      />
      <Tab.Screen
        name={servicio}
        component={ServiceScreen}
        options={{ tabBarLabel: () => <Text>servicio</Text> }}
      />
      <Tab.Screen
        name={servicios}
        component={ServicesScreen}
        options={{ tabBarLabel: () => <Text>servicios</Text> }}
      />
      <Tab.Screen
        name={solicitar}
        component={RequestServiceScreen}
        options={{ tabBarLabel: () => <Text>solicitar</Text> }}
      />
      <Tab.Screen
        name={support}
        component={SupportScreen}
        options={{ tabBarLabel: () => <Text>support</Text> }}
      />
      <Tab.Screen
        name={terminos}
        component={TermsScreen}
        options={{ tabBarLabel: () => <Text>terminos</Text> }}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeStack;
