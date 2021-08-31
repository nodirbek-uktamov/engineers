import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { GlobalContext } from './contexts/GlobalContext'
import ChooseRole from './screens/Auth/ChooseRole'
import Agreement from './screens/Auth/Agreement'
import Registration from './screens/Auth/Registration'
import OrdersList from './screens/OrdersList'
import OrdersMapList from './screens/OrdersMapList'
import CustomDrawer from './components/CustomDrawer'
import OrderDetail from './screens/OrderDetail'
import MyOrders from './screens/MyOrders'
import OrderCreate from './screens/OrderCreate'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export default function Navigation() {
    const { user } = useContext(GlobalContext)
    const initial = user ? 'OrdersList' : 'ChooseRole'

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerStyle={{
                width: '80%',
            }} drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName={initial}>
                {/* Auth */}
                <Drawer.Screen options={{ gestureEnabled: false }} name="ChooseRole" component={ChooseRole} />
                <Drawer.Screen name="Agreement" options={{ gestureEnabled: false }} component={Agreement} />

                <Drawer.Screen
                    name="Registration"
                    options={{ gestureEnabled: false }}
                    component={Registration} />

                <Drawer.Screen name="OrdersList" component={OrdersList} />
                <Drawer.Screen name="OrdersMapList" component={OrdersMapList} />
                <Drawer.Screen name="OrderDetail" component={OrderDetail} />
                <Drawer.Screen name="MyOrders" component={MyOrders} />
                <Drawer.Screen name="OrderCreate" component={OrderCreate} />

                {/* <Stack.Screen */}
                {/* name="TabScreen" */}
                {/* component={TabScreen} */}
                {/* options={{ headerShown: false }} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            {/* <Tab.Screen name="Home" component={Home} */}
            {/*    options={{ */}
            {/*        tabBarIcon: () => ( */}
            {/*            <View style={styles.centered}> */}
            {/*                <Image */}
            {/*                    source={message} */}
            {/*                    resizeMode="contain" */}
            {/*                    style={{ */}
            {/*                        width: normalize(21), */}
            {/*                        height: normalize(22.16), */}
            {/*                    }} /> */}
            {/*            </View> */}
            {/*        ), */}
            {/*    }} /> */}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
