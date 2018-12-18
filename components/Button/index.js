import React, {Component} from 'react';
// import PromType from 'prop-type';
import {TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

function Button({iconName, onPress}){
    return(
        <TouchableOpacity>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    );
}

export default Button;