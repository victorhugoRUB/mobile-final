import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Dimensions, Linking } from 'react-native';
import authService from '../services/auth_service';
import { EventCard, NewsCard, SermonCard } from '../components/card';
import { PostEntity } from '../services/data/entity/post_entity';
import { getIdFromVideoUrl } from '../utils/formatter';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation();
    const [posts, setPosts] = useState<PostEntity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                const data = await authService.getPosts();
                setPosts(data);
            } catch (err: any) {
                setError(err.message || 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const handleSermonPress = (videoUrl: string) => {
        if (videoUrl) {
            Linking.openURL(videoUrl);
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#000" />
                <Text>Carregando...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>{error}</Text>
            </View>
        );
    }

    const sermons = posts.filter(p => p.type === 'SERMON');
    const news = posts.filter(p => p.type === 'NEWS');
    const events = posts.filter(p => p.type === 'EVENT');
    const fallback = posts;

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32, paddingTop: 32 }}>
            <Text style={styles.sectionTitle}>Pregações</Text>
            <Text style={styles.sectionSubtitle}>Quarta-feira</Text>
            {sermons.length > 0 && (
                <>
                    <View style={{ width: '100%', marginBottom: 16 }}>
                        <SermonCard
                            image={
                                getIdFromVideoUrl(sermons[0].video_url)
                                    ? `https://img.youtube.com/vi/${getIdFromVideoUrl(sermons[0].video_url)}/maxresdefault.jpg`
                                    : sermons[0].image
                            }
                            title={sermons[0].title}
                            date={new Date(sermons[0].created_at).toLocaleDateString('pt-BR')}
                            onPress={() => handleSermonPress(sermons[0].video_url)}
                        />
                    </View>
                    <FlatList
                        data={sermons.slice(1)}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginVertical: 12 }}
                        renderItem={({ item }) => (
                            <View style={{ width: width * 0.5 }}>
                                <SermonCard
                                    image={
                                        getIdFromVideoUrl(item.video_url)
                                            ? `https://img.youtube.com/vi/${getIdFromVideoUrl(item.video_url)}/maxresdefault.jpg`
                                            : item.image
                                    }
                                    title={item.title}
                                    date={new Date(item.created_at).toLocaleDateString('pt-BR')}
                                    onPress={() => handleSermonPress(item.video_url)}
                                />
                            </View>
                        )}
                    />
                </>
            )}

            <Text style={styles.sectionTitle}>Notícias</Text>
            <FlatList
                data={news.length > 0 ? news : fallback}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 12 }}
                renderItem={({ item }) => (
                    <View style={{ width: width * 0.6, maxWidth: 350, minWidth: 220 }}>
                        <NewsCard
                            image={
                                news.length <= 0 && getIdFromVideoUrl(item.video_url)
                                    ? `https://img.youtube.com/vi/${getIdFromVideoUrl(item.video_url)}/maxresdefault.jpg`
                                    : item.image
                            }
                            title={item.title}
                            description={item.content}
                            onPressMore={() => navigation.navigate('NewsDetail', {
                                image: item.image,
                                title: item.title,
                                description: item.content,
                                date: new Date(item.created_at).toLocaleDateString('pt-BR')
                            })}
                        />
                    </View>
                )}
            />

            <Text style={styles.sectionTitle}>Eventos</Text>
            <FlatList
                data={events.length > 0 ? events : fallback}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 12 }}
                renderItem={({ item }) => (
                    <View style={{ width: width * 0.7 }}>
                        <EventCard
                            image={
                                events.length <= 0 && getIdFromVideoUrl(item.video_url)
                                    ? `https://img.youtube.com/vi/${getIdFromVideoUrl(item.video_url)}/maxresdefault.jpg`
                                    : item.image
                            }
                            title={item.title}
                            date={new Date(item.created_at).toLocaleDateString('pt-BR')}
                            description={item.content}
                            location={'Local não informado'}
                            onPressMore={() => Linking.openURL('https://www.facebook.com/maranatachurchpp')}

                        />
                    </View>
                )}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.04,
        backgroundColor: '#fff',
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