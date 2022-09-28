import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View,SafeAreaView,Text,StyleSheet,ScrollView, TextInput, TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';





const HomePage= ()=>{
    const navigation=useNavigation();
    
        return(
            <ScrollView>
                <View style={{flex:1, backgroundColor:'#3e2387'}}>
                    <SafeAreaView >
                         <View   
                            style={{
                            flexDirection:"row",
                            marginTop:20,
                            alignItems:"center",
                            paddingHorizonatal:10
                            }}>

                            <TouchableOpacity>
                                <Icon name="menu" size={40} color="#a2a2db" style={{width:27,marginLeft:17}}/>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Icon name="account-circle" size={55} color="#a2a2db" style={{marginLeft:235}}/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <View 
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#fff",
                                    borderRadius:40,
                                    alignItems:"center",
                                    paddingVertical:10,
                                    paddingHorizontal:30,
                                    marginTop:30,
                                    marginBottom:30,
                                    //marginBottom:40,
                                }}>
                                <Icon name="search" size={33} color="#a2a2db" style={{marginLeft:0}}/>
                                <TextInput placeholder="    Find Your Train Here."style={{fontSize:15,}}/>
                            </View >
                        </TouchableOpacity>

                        <ScrollView 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{marginRight:0, margiTop:30}}>
                            <TouchableOpacity>
                            <View 
                                style={{
                                width:66,
                                marginLeft:10,
                                height:66,
                                borderRadius:50,
                                backgroundColor:"#5facdb",
                                justifyContent:"center",
                                alignItems: "center",
                                }}>
                                <Icon name="train" size={35} color="#FFFFFF" />
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={{
                                width:66,
                                marginLeft:30,
                                height:66,
                                borderRadius:50,
                                backgroundColor:"#873e23",
                                justifyContent:"center",
                                alignItems: "center",
                                }}>
                                <Icon name="mail" size={35} color="#FFFFFF" />
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <View style={{
                                width:66,
                                marginLeft:30,
                                height:66,
                                borderRadius:50,
                                backgroundColor:"#ffa06c",
                                justifyContent:"center",
                                alignItems: "center",
                                }}>
                                <Icon name="map" size={35} color="#FFFFFF" />
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <View style={{
                                width:66,
                                marginLeft:30,
                                height:66,
                                borderRadius:50,
                                backgroundColor:"#588723",
                                justifyContent:"center",
                                alignItems: "center",
                    }}>
                   <Icon name="delete" size={35} color="#FFFFFF" />

                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{
                        width:66,
                        marginLeft:30,
                        height:66,
                        borderRadius:50,
                        backgroundColor:"#bb32fe",
                        justifyContent:"center",
                        alignItems: "center",
                    }}>
                   <Icon name="settings" size={30} color="#FFFFFF" />

                    </View>
                    </TouchableOpacity>
                    </ScrollView>

                    

                    
                        
                        

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginRight:0, marginTop:30}}>
                        <View style = {{
                            backgroundColor:"#FFF",
                            height:200,
                            width:190,
                            borderRadius:15,
                            padding:5,
                            marginLeft:10,
                        }}>
                        <Image source={require('../assets/1.jpg')} style={{width:180,height:150,borderRadius:10,}}/> 
                        
                        <View style={{
                            flexDirection:"row",
                            width:150,
                            alignItems:"center"
                        }}>
                            <View style={{
                                paddingHorizontal:5,
                                paddingVertical:5,
                            }}>
                            <Text style={{
                                fontWeight:'bold',
                                marginLeft:10,
                                color:"#21130d",
                                textAlign:"center",
                                //marginRight:30
                            }}>
                                Yal Devi 
                                </Text>
                                    <Text style={{
                                        fontSize:10,
                                        color:"#21130d",
                                        textAlign:"center",
                                        fontWeight:'bold',
                                
                                    }}>
                                    (Colombo-Kankesanthurai)
                                </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{navigation.navigate("Booking")}}>
                                    <Image source={require('../assets/chair.png')} style={{width:40,height:40,borderRadius:10,}}/> 
                                    </TouchableOpacity>
                            </View>
                            </View>
                            <View style = {{
                            backgroundColor:"#FFF",
                            height:200,
                            width:190,
                            borderRadius:15,
                            padding:5,
                            marginLeft:10,
                        }}>
                        <Image source={require('../assets/2.jpg')} style={{width:180,height:150,borderRadius:10,}}/> 
                    
                        <View style={{
                            flexDirection:"row",
                            width:186,
                            alignItems:"center"
                        }}>
                            <View style={{
                                paddingHorizontal:20,
                                paddingVertical:5,
                            }}>
                            <Text style={{
                                fontWeight:'bold',
                                marginLeft:20,
                                color:"#21130d",
                                textAlign:"center",
                                marginRight:8 
                            }}>
                                Udaya Devi  
                                </Text>
                                    <Text style={{
                                        fontSize:10,
                                        color:"#21130d",
                                        textAlign:"center",
                                        fontWeight:'bold',
                                
                                    }}>
                                    (Colombo-Batticaloa)
                                </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{navigation.navigate("BookingPageUdayaDevi")}}>
                                    <Image source={require('../assets/chair.png')} style={{width:40,height:40,borderRadius:10,}}/> 
                                    </TouchableOpacity>
                            </View>
                            </View>

                        <View style = {{
                            backgroundColor:"#FFF",
                            height:200,
                            width:190,
                            borderRadius:15,
                            padding:5,
                            marginLeft:10,
                        }}>
                        <Image source={require('../assets/4.jpg')} style={{width:180,height:150,borderRadius:10,}}/> 
                    
                        <View style={{
                            flexDirection:"row",
                            width:186,
                            alignItems:"center"
                        }}>
                            <View style={{
                                paddingHorizontal:15,
                                paddingVertical:5,
                            }}>
                            <Text style={{
                                fontWeight:'bold',
                                marginLeft:0,
                                color:"#21130d",
                                textAlign:"center",
                                marginRight:0 
                            }}>
                                The Ella Odyssey 
                                </Text>
                                    <Text style={{
                                        fontSize:10,
                                        color:"#21130d",
                                        textAlign:"center",
                                        fontWeight:'bold',
                                
                                    }}>
                                    (Colombo-Badulla)
                                </Text>
                                    </View>
                                    <TouchableOpacity  onPress={()=>{navigation.navigate("BookingPageEllaOdisy")}} >
                                    <Image source={require('../assets/chair.png')} style={{width:40,height:40,borderRadius:10,}}/> 
                                    </TouchableOpacity>
                            </View>
                            
                            

                </View>     
                </ScrollView>
                

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginRight:0, marginTop:30}}>
                        <View style = {{
                            backgroundColor:"#FFF",
                            height:200,
                            width:190,
                            borderRadius:15,
                            padding:5,
                            marginLeft:10,
                        }}>
                        <Image source={require('../assets/6.jpg')} style={{width:180,height:150,borderRadius:10,}}/> 
                    
                        <View style={{
                            flexDirection:"row",
                            width:150,
                            alignItems:"center"
                        }}>
                            <View style={{
                                paddingHorizontal:20,
                                paddingVertical:5,
                            }}>
                            <Text style={{
                                fontWeight:'bold',
                                marginLeft:10,
                                color:"#21130d",
                                textAlign:"center",
                                marginRight:10 
                            }}>
                                Podi Menike
                                </Text>
                                    <Text style={{
                                        fontSize:10,
                                        color:"#21130d",
                                        textAlign:"center",
                                        fontWeight:'bold',
                                
                                    }}>
                                    (Colombo-Badulla)
                                </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{navigation.navigate("BookingPagePodiManike")}}>
                                    <Image source={require('../assets/chair.png')} style={{width:40,height:40,borderRadius:10,}}/> 
                                    </TouchableOpacity>
                            </View>
                            </View>
                            <View style = {{
                            backgroundColor:"#FFF",
                            height:200,
                            width:190,
                            borderRadius:15,
                            padding:5,
                            marginLeft:10,
                        }}>
                        <Image source={require('../assets/5.jpg')} style={{width:180,height:150,borderRadius:10,}}/> 
                    
                        <View style={{
                            flexDirection:"row",
                            width:186,
                            alignItems:"center"
                        }}>
                            <View style={{
                                paddingHorizontal:2,
                                paddingVertical:5,
                            }}>
                            <Text style={{
                                fontWeight:'bold',
                                marginLeft:23,
                                color:"#21130d",
                                textAlign:"right",
                                marginRight:8 
                            }}>
                                Udarata Manike  
                                </Text>
                                    <Text style={{
                                        fontSize:10,
                                        color:"#21130d",
                                        textAlign:"center",
                                        fontWeight:'bold',
                                
                                    }}>
                                    (Colombo-Badulla)
                                </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{navigation.navigate("BookingPageUdarataManike")}}>
                                    <Image source={require('../assets/chair.png')} style={{width:40,height:40,borderRadius:10,}}/> 
                                    </TouchableOpacity>
                            </View>
                            </View>

                        <View style = {{
                            backgroundColor:"#FFF",
                            height:200,
                            width:190,
                            borderRadius:15,
                            padding:5,
                            marginLeft:10,
                        }}>
                        <Image source={require('../assets/7.jpg')} style={{width:180,height:150,borderRadius:10,}}/> 
                    
                        <View style={{
                            flexDirection:"row",
                            width:186,
                            alignItems:"center"
                        }}>
                            <View style={{
                                paddingHorizontal:10,
                                paddingVertical:5,
                            }}>
                            <Text style={{
                                fontWeight:'bold',
                                marginLeft:0,
                                color:"#21130d",
                                textAlign:"center",
                                marginRight:0 
                            }}>
                                Uttara Devi
                                </Text>
                                    <Text style={{
                                        fontSize:10,
                                        color:"#21130d",
                                        textAlign:"center",
                                        fontWeight:'bold',
                                
                                    }}>
                                    (Colombo-Kankesanthurai)
                                </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>{navigation.navigate("BookingPageUttaraDevi")}}>
                                    <Image source={require('../assets/chair.png')} style={{width:40,height:40,borderRadius:10,}}/> 
                                    </TouchableOpacity>
                            </View>
                            
                            

                </View>     
                </ScrollView>
               

                




                
                

                

                
            
            
           
            
            </SafeAreaView>
            </View> 
            </ScrollView>
        );
        
    }

const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    defaultBg:{
        width:'100%',
        height:130,
    },
    formInput:{
        marginTop:10,
        padding:5,
    },

    textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"a7a7a7a",
        borderRadius:10,
    },
    defaultButton:{
        padding:15,
        backgroundColor: '#a2a2db',
        borderRadius:20,
    },
    menueContinerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    searchInputContainer:{
        height:50,
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius:10,
    }


});

export default HomePage;