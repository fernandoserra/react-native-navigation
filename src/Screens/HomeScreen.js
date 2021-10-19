import React, {useEffect, useState, useContext}from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context } from "../context/AppContext";

const HomeScreen = ({navigation})=>{
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
});

export default HomeScreen;