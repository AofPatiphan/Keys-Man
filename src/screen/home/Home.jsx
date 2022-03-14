import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

function Home() {
    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </View>
        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 10,
        // justifyContent: 'center',
    },
});
