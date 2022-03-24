import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookScreen from '../screens/BooksScreen'
import CartScreen from '../screens/CartScreen'
import ShoppingCartIcon from '../components/ShoppingCartIcon'

const Stack = createNativeStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Books'
                    component={BookScreen}
                    options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}
                />    
                <Stack.Screen name='Cart' component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator