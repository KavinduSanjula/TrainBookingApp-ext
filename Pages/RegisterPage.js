import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import {View,SafeAreaView,Text,StyleSheet,ScrollView, ImageBackground,TextInput, TouchableOpacity,Image} from 'react-native'
import { ToastAndroid } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp} from 'firebase/app';




const RegisterPage= ()=>{

    const handleRegister = ()=>{

        initializeApp();

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, "kavindusanjula.1@gmail.com", "kavindu2001").then(
            (userCred) => {
                ToastAndroid.showWithGravity(
                    "Register Scuccess",
                    ToastAndroid.CENTER,
                );
            }
        ).catch(
            (error)=>{
                ToastAndroid.showWithGravity(
                    "Register Faild",
                    ToastAndroid.CENTER,
                );
            }
        );
    }
    
    const navigation=useNavigation();
    

        return(
            <SafeAreaView>
            <ImageBackground
            source={require("../assets/back.png")}
            style={{ width: "100%", height: "110%", }}
            >
            
                <ScrollView>
                <View style={{paddingTop:30,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        
                            <Image source={require('../assets/add.png')} style={{width:180,height:180,borderRadius:1000,}}/>
                        
                    </View>
                
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Your Full Name"/> 
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Your Email Address"/> 
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/> 
                </View>

                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true}/> 
                </View>

                <View style= {styles.formInput}>
                    <TouchableOpacity>
                        <Text style={{color:"#fff", textAlign:'right',fontSize:16,fontWeight:'bold'}}></Text>
                    </TouchableOpacity>
                </View>
                <View style= {styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton} onPress={handleRegister}>
                        <Text style={{color:"1C1C1C", fontWeight:'bold',textAlign:'center',fontSize:20,fontWeight:'bold'}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formInput}>
                    <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                        <Text style={{color:"#ffffff", textAlign:'center',fontSize:16,fontWeight:'bold'}}>Already Have Account? Login</Text>
                    </TouchableOpacity>
                </View>
                

                 
                </ScrollView>
                
            
            </ImageBackground>
            </SafeAreaView>
            
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


});

export default RegisterPage;