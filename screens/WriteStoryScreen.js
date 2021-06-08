import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }
    submitStory = () => {
        db.collection('Stories').add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        });
        ToastAndroid.show('Story Submitted', ToastAndroid.SHORT)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} enabled>
                <Header
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: 'STORY HUB',
                        style: { color: 'black', fontSize: 30 }
                    }}
                />
                <TextInput
                    placeholder="STORY TITLE"
                    onChangeText={(text) => {
                        this.setState({
                            title: text
                        })
                    }}
                    style={styles.title} />
                <TextInput
                    placeholder="Author"
                    onChangeText={(text) => {
                        this.setState({
                            author: text
                        })
                    }}
                    style={styles.author} />
                <TextInput
                    placeholder="WRITE YOUR STORY"
                    onChangeText={(text) => {
                        this.setState({
                            storyText: text
                        })
                    }}
                    style={styles.storyText}
                />

                <TouchableOpacity onPress={this.submitStory}
                    style={styles.submitButton}
                >
                    <Text style={styles.buttonText}>SUMBIT</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        height: 40,
        borderWidth: 2,
        marginTop: 40,
        margin: 10,
        color: 'black',
        padding: 6,

    },
    author: {
        height: 40,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    storyText: {
        height: 250,
        borderWidth: 2,
        margin: 10,
        padding: 6,
    },
    submitButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: 80,
        height: 40, color: 'black',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        color: 'black',
    }
});