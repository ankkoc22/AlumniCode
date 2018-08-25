import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AlumniConnect from './app/index'

export default class App extends React.Component {


    render() {
        return (
            <AlumniConnect/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
