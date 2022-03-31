import axios from '../../config/axios';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import ProfileCard from '../../components/ProfileCard';

function Home({ navigation }) {
    const [userData, setUserData] = useState([]);

    const fetchUserData = async () => {
        try {
            const res = await axios.get(`/users/all/1`);
            setUserData(res.data.users);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                {userData.map((item) => (
                    <ProfileCard
                        item={item}
                        key={item.id}
                        navigation={navigation}
                    />
                ))}
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
