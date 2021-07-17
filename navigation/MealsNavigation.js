import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MealsScreen , {MealsOptions} from '../screens/MealsScreen'
import SearchScreen  ,{searchOptions} from '../screens/SearchScreen'
import OrdersScreen , {ordersOptions} from '../screens/Orders';
import RewardsScreen ,{rewardsOptions} from '../screens/Rewards';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const defaultNavOptions ={
    headerStyle : {
        backgroundColor :'#fff' ,
        shadowRadius: 0,
        shadowColor: 'transparent',
        shadowOffset: {
            height: 0,
            width : 0
        },
        shadowOpacity : 0,
        elevation : 0
    },
    headerTintColor :"green" 
}

const MealsStackNavigator = createStackNavigator();

export const MealsNavigator = () => {
    return(
        <MealsStackNavigator.Navigator screenOptions={defaultNavOptions}>
           <MealsStackNavigator.Screen name='meals' component={MealsScreen} options={MealsOptions}/>
        </MealsStackNavigator.Navigator>
    )
}

const SearchStackNavigator = createStackNavigator();

export const SearchNavigator = () => {
    return(
        <SearchStackNavigator.Navigator screenOptions={defaultNavOptions}>
           <SearchStackNavigator.Screen name='meals' component={SearchScreen} options={MealsOptions}/>
        </SearchStackNavigator.Navigator>
    )
}

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
    return(
        <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
           <OrdersStackNavigator.Screen name='meals' component={OrdersScreen} options={MealsOptions}/>
        </OrdersStackNavigator.Navigator>
    )
}

const RewardsStackNavigator = createStackNavigator();

export const RewardsNavigator = () => {
    return(
        <RewardsStackNavigator.Navigator screenOptions={defaultNavOptions}>
           <RewardsStackNavigator.Screen name='meals' component={RewardsScreen} options={MealsOptions}/>
        </RewardsStackNavigator.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();

export  const MyTabs = ()=> {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#e9d023' }}
    >
      <Tab.Screen
        name="Home"
        component={MealsNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#e9d023',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarColor:'green',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cash-register" size={24} color="black" />
          ),
        }}
      />
       <Tab.Screen
        name="Rewards"
        component={RewardsNavigator}
        options={{
          tabBarLabel: 'Rewards',
          tabBarColor:'green',
          tabBarIcon: ({ color }) => (
            <Ionicons name="medal" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}