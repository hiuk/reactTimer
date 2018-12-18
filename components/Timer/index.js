import React , {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button';

class Timer extends Component{
    render() {
        return(
            <View style={styles.container}>
            <View style={styles.upper}>
                <Text style={styles.time}>25:00</Text>
            </View>
            <View style={styles.lower}>
                <Button iconName="play-circle"/>
                <Button iconName="stop-circle"/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#FF4F33",
        },
        upper:{
            flex:2,
            justifyContent:'center',
            alignItems:'center',
        },
        lower:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        time:{
            color:'white',
            fontSize:120,
            fontWeight:'100'
        }
    }
)
export default Timer;