import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type NewsDetailParams = {
    NewsDetail: {
        image: string;
        title: string;
        description: string;
        date: string;
    };
};

export default function NewsDetailScreen() {
    const route = useRoute<RouteProp<NewsDetailParams, 'NewsDetail'>>();
    const { image, title, description, date } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL('https://www.instagram.com/maranatachurchpp/')}
            >
                <Text style={styles.buttonText}>Ver no Instagram</Text>
            </TouchableOpacity>
            <View style={{ height: 16 }} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL('https://www.facebook.com/maranatachurchpp')}
            >
                <Text style={styles.buttonText}>Ver no Facebook</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        marginBottom: 24,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#222',
        textAlign: 'center',
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: '#444',
        marginBottom: 32,
        textAlign: 'justify',
    },
    button: {
        backgroundColor: '#222',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});