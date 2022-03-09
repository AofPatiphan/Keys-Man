import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

function Home() {
    return (
        <View style={styles.container}>
            <Text>This is Home Screen</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
