import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class ProfileScreen extends React.Component {

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
                <View style={{flex: 0.2,backgroundColor: '#01172C',alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
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
                <View style={{flex: 1,backgroundColor: 'white',alignItems: 'center'}}>
                    <Text style={{fontSize: 25,marginTop: 10,color: 'rgba(0,0,0,0.7)'}}>Ankush Kochar</Text>
                    <View style={{borderTopWidth: 1,borderBottomWidth: 1,borderColor: 'rgba(0,0,0,0.7'}}>
                        <Text>Alumni Nearby</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
