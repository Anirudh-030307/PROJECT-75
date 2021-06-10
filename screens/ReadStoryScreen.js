import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            book: [],
            search: '',
            lastVisibleStory: null,
        }
    }

    componentDidMount = async () => {
        const allStories = await db.collection("Stories").limit(10).get();

        allStories.docs.map((doc) => {
            this.setState({
                book: [...this.state.book, doc.data()],
                lastVisibleStory: doc
            });
        });
    }

    fetchMoreStories = async (text) => {
        const story = await db.collection("Stories").where('title', '==', text).startAfter(this.state.lastVisibleStory).limit(10).get();
        story.docs.map((doc) => {
            this.setState({
                book: [...this.state.book, doc.data()],
                lastVisibleStory: doc
            });
        });
    }

    searchFilterFunction = async (text) => {
        this.setState({
            book: [],
        })
        const story = await db.collection("Stories").where('title', '==', text).get();
        story.docs.map((doc) => {
            this.setState({
                book: [...this.state.book, doc.data()],
                lastVisibleStory: doc
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.bar}
                        placeholder="Enter book name"
                        onChangeText={(text) => { this.setState({ search: text }) }}
                    />

                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={() => {
                            this.searchFilterFunction(this.state.search)
                            this.setState({ search: [] })
                        }}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={this.state.book}
                    renderItem={({ item }) => (
                        <View style={{ borderBottomWidth: 2, marginTop: 20, marginBottom: 20 }}>
                            <Text>{"Story Name: " + item.title}</Text>
                            <Text>{"Story Author: " + item.author}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    searchBar: {
        flexDirection: 'row',
        height: 40,
        width: 'auto',
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
    },
    bar: {
        borderWidth: 2,
        height: 30,
        width: 280,
        paddingLeft: 10,
        borderRadius: 30,
    },
    searchButton: {
        borderWidth: 1,
        height: 30,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
});
