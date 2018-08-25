import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }

    static navigationOptions = {
        title: 'Welcome to DemoWedding',
        header: null
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'AIOberonBold': require('../../assets/AIOberonBold.ttf'),
            'Gotham': require('../../assets/GothamBook.ttf'),
            'GothamMed': require('../../assets/GothamMedium.ttf'),
        });
        this.setState({fontLoaded: true});
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{flex: 3, backgroundColor: '#01172C', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{
                        height: 250,
                        width: 250,
                        borderRadius: 250 / 2,
                        backgroundColor: '#D0D0D3',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 10,
                        borderColor: 'white'
                    }}>
                        <Image source={require('../../assets/logo.png')} style={{height: 150, width: 170}}/>
                    </View>
                </View>
                <View style={{flex: 0.5, backgroundColor: '#4E79A4', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                            fontSize: 35,
                            color: 'white',
                            fontFamily: this.state.fontLoaded ? 'AIOberonBold' : null
                        }}>ALUMNI</Text><Text style={{
                        fontFamily: this.state.fontLoaded ? 'AIOberonBold' : null,
                        fontSize: 35,
                        color: 'rgba(255,255,255,0.5)'
                    }}> CONNECT</Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: '#9FB5CD', justifyContent: 'center'}}>
                    <TouchableOpacity style={{
                        marginLeft: 60,
                        marginRight: 60,
                        height: 50,
                        backgroundColor: '#C1ECF3',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} ><View style={{flexDirection: 'row'}}><Text
                        style={{ fontSize: 16,marginTop: 3}}>Enter Now With</Text>
                        <Text style={{fontSize: 20}}> Linked</Text>
                        <Image source={require('../../assets/in_logo.png')} style={{height: 23,width: 23}}/></View></TouchableOpacity>
                    <TouchableOpacity style={{
                        marginLeft: 60,
                        marginRight: 60,
                        height: 50,
                        backgroundColor: '#C1ECF3',
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={()=>navigate('ProfileScreen')}><Text style={{ fontSize: 16}}>Use
                        Email</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
