import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import firebase from 'firebase';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
        }
    }
    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.login, this.state.password)
            .then(() => { this.props.navigation.navigate('TabNavigator') }).catch((error) => { alert(error.message) })
    }

    render() {
        return (
            <View>
                <TextInput placeholder="EMAIL" onChangeText={(text) => {
                    this.setState({
                        login: text
                    })
                }} />
                <TextInput placeholder="PASSWORD" onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }} />
                <TouchableOpacity onPress={this.login}><Text>LOGIN</Text></TouchableOpacity>
            </View>
        );
    }
}