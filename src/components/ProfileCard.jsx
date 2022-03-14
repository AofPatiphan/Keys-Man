import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

function ProfileCard() {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.profileImg}
                source={{
                    uri: 'https://res.cloudinary.com/dbtlgaii3/image/upload/v1644699867/dde7b031765bbf67d0a8a3530e56dbfa_vrg30d.jpg',
                }}
            />
            <View>
                <View style={styles.profileDetail}>
                    <Text style={styles.cardUsername}>Aofzzz</Text>
                    <Text style={{ marginLeft: 100 }}>ProfileCard</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text>Hello</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ProfileCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        margin: 10,
    },
    profileImg: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
        marginRight: 30,
        borderRadius: 60 / 2,
    },
    cardUsername: {
        fontSize: 20,
        fontWeight: '600',
    },
    profileDetail: {
        display: 'flex',
        flexDirection: 'row',
    },
});
