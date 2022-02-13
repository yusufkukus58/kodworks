import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Jobs from '../pages/Jobs/Jobs';
import Favorite from '../pages/Favorites/Favorite';


const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTitleStyle: {
    color: '#FF5C58',
  },
  drawerActiveTintColor: '#FF5C58',
  headerTintColor: '#FF5C58',
};

const JobDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen
        name="JobsPage"
        component={Jobs}
        options={{title: 'Jobs'}}
      />
      <Drawer.Screen
        name="FavoritesPage"
        component={Favorite}
        options={{title: 'Favorite Jobs'}}
      />
    </Drawer.Navigator>
  );
};

export default JobDrawer;