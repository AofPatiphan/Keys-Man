import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screen/home/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Tabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Discover"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Maps"
                component={Home}
                options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="magnify"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Messenger"
                component={Home}
                options={{
                    tabBarLabel: 'Messenger',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chat"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;
