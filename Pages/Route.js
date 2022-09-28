import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPage from "./ForgotPage";
import Splash from "./Splash";
import BookingPage from "./BookingPageYalDevi";
import BookingPayment from "./BookingPayment";
import BookingPageEllaOdisy from "./BookingPageEllaOdisy";
import BookingPagePodidManike from "./BookingPagePodiManike";
import BookingPageUdayaDevi from "./BookingPageUdayaDevi";
import BookingPageUdarataManike from "./BookingPageUdarataManike";
import BookingPageUttaraDevi from "./BookingPageUttaraDevil";


const Stack = createNativeStackNavigator();
const AppRouter = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomePage}/>
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginPage}/>
          <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterPage}/>
          <Stack.Screen name="Forgot" options={{headerShown:false}} component={ForgotPage}/>
          <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
          <Stack.Screen name="Booking" options={{headerShown:false}} component={BookingPage}/>
          <Stack.Screen name="BookingPayment" options={{headerShown:false}} component={BookingPayment}/>
          <Stack.Screen name="BookingPageUdayaDevi" options={{headerShown:false}} component={BookingPageUdayaDevi}/>
          <Stack.Screen name="BookingPageEllaOdisy" options={{headerShown:false}} component={BookingPageEllaOdisy}/>
          <Stack.Screen name="BookingPagePodiManike" options={{headerShown:false}} component={BookingPagePodidManike}/>
          <Stack.Screen name="BookingPageUdarataManike" options={{headerShown:false}} component={BookingPageUdarataManike}/>
          <Stack.Screen name="BookingPageUttaraDevi" options={{headerShown:false}} component={BookingPageUttaraDevi}/>

        </Stack.Navigator>
      </NavigationContainer>

    )

}

export default AppRouter;