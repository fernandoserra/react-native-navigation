import React, {useContext} from "react";
import { Text, StyleSheet} from "react-native";
import { SafeAreaView } from "react-navigation";


const ContactScreen = ()=>{
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text>ContactScreen</Text>
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({});

export default ContactScreen;