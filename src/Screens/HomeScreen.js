import React, {useEffect, useState, useContext}from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context } from "../context/AppContext";

const HomeScreen = ({navigation})=>{
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <View style={styles.container2}>
                <Text style={styles.title}>HomeScreen.</Text>
            </View>
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title:{
        color:'#ffffff',
        fontSize:20
    },
    container2:{
        height:300,
        backgroundColor:'blue',
        justifyContent:'flex-end'
    }
});

export default HomeScreen;