import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

function ProfileCard({ item, navigation }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        >
            <Image
                style={styles.profileImg}
                source={{
                    uri: `${item.profileUrl}`,
                }}
            />
            <View style={{ flex: 1, borderWidth: 1 }}>
                <View style={styles.profileDetail}>
                    <Text style={styles.cardUsername}>{item.username}</Text>
                    <Text>2m</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text>{item.caption}</Text>
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
        resizeMode: 'cover',
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
        justifyContent: 'space-between',
    },
});
