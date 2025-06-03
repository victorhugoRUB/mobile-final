import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppBar from '../components/app_bar';
import { SermonCard, NewsCard, EventCard } from '../components/card';
import BottomTab from '../components/bottom_tab';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <AppBar /> */}
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32, paddingTop: 32 }}>
                <Text style={styles.sectionTitle}>Pregações</Text>
                <Text style={styles.sectionSubtitle}>Quarta-feira</Text>
                <SermonCard
                    image="https://images.unsplash.com/photo-1464983953574-0892a716854b"
                />
                <View style={styles.sermonRow}>
                    <SermonCard
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                        title="Loren ipsum"
                        date="13 de Julho"
                    />
                    <SermonCard
                        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                        title="Loren ipsum"
                        date="13 de Julho"
                    />
                </View>

                <Text style={styles.sectionTitle}>Notícias</Text>
                <View style={styles.newsRow}>
                    <NewsCard
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                        title="Loren ipsum"
                        description="Loren ipsum dolor sit, consectetur..."
                        date="13 de Julho"
                        onPressMore={() => { }}
                    />
                    <NewsCard
                        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                        title="Loren ipsum"
                        description="Loren ipsum dolor sit, consectetur..."
                        date="13 de Julho"
                        onPressMore={() => { }}
                    />
                </View>

                <Text style={styles.sectionTitle}>Eventos</Text>
                <View style={styles.newsRow}>
                    <EventCard
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                        title="Sexta feira, 13/jul • 18:00Hrs"
                        description="Loren ipsum dolor sit, consectetur..."
                        location="Salão principal"
                        onPressMore={() => { }}
                    />
                    <EventCard
                        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                        title="Sexta feira, 13/jul • 18:00Hrs"
                        description="Loren ipsum dolor sit, consectetur..."
                        location="Sala kids"
                        onPressMore={() => { }}
                    />
                </View>
            </ScrollView>
            {/* <BottomTab activeTab="Home" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 8,
        color: '#222',
    },
    sectionSubtitle: {
        fontSize: 16,
        color: '#444',
        marginBottom: 8,
    },
    sermonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    newsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});