import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get('window');

export interface SermonCardProps {
    image: string;
    title?: string;
    date?: string;
    onPress?: () => void;
}

export function SermonCard({ image, title, date, onPress }: SermonCardProps) {
    return (
        <View style={styles.sermonCard}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <Image source={{ uri: image }} style={styles.sermonImage} />
                <View
                    style={[
                        styles.playIconContainer,
                        {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: [{ translateX: -24 }, { translateY: -24 }],
                        },
                    ]}
                >
                    <Ionicons name="play-circle" size={48} color="#fff" />
                </View>
            </TouchableOpacity>
            {title ? <Text style={styles.sermonTitle}>{title}</Text> : null}
            {date ? <Text style={styles.sermonDate}>{date}</Text> : null}
        </View>
    );
}

export interface NewsCardProps {
    image: string;
    title?: string;
    description?: string;
    date?: string;
    onPressMore?: () => void;
}

export function NewsCard({ image, title, description, date, onPressMore }: NewsCardProps) {
    return (
        <TouchableOpacity style={styles.newsCard} onPress={onPressMore} activeOpacity={0.8}>
            <Image source={{ uri: image }} style={styles.newsImage} />
            {(title || description || date) && (
                <View style={styles.newsInfo}>
                    {title ? <Text style={styles.newsTitle}>{title}</Text> : null}
                    {description ? <Text style={styles.newsDesc}>{description}</Text> : null}
                    {(date || onPressMore) && (
                        <View style={styles.newsFooter}>
                            {date ? <Text style={styles.newsDate}>{date}</Text> : null}
                            {onPressMore ? (
                                <Text style={styles.newsMore}>Ver mais</Text>
                            ) : null}
                        </View>
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
}

export interface EventCardProps {
    image: string;
    title: string;
    date?: string;
    description: string;
    location: string;
    onPressMore?: () => void;
}
export function EventCard({ image, title, date, description, location, onPressMore }: EventCardProps) {
    return (
        <View style={styles.eventCard}>
            <NewsCard image={image} onPressMore={onPressMore} />
            <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{title}</Text>
                {date ? <Text style={styles.eventDate}>{date}</Text> : null}
                <Text style={styles.eventDesc}>{description}</Text>
                <Text style={styles.eventLocation}>Local: {location}</Text>
                {onPressMore && (
                    <TouchableOpacity onPress={onPressMore}>
                        <Text style={styles.eventMore}>Ver mais</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sermonCard: {
        flex: 1,
        marginBottom: 16,
        marginRight: 8,
        position: 'relative',
        maxWidth: width * 0.95,
    },
    sermonImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 8,
    },
    playIconContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -24 }, { translateY: -24 }],
        zIndex: 2,
    },
    sermonTitle: {
        fontWeight: 'bold',
        fontSize: Math.max(14, width * 0.04),
        marginTop: 8,
        color: '#222',
    },
    sermonDate: {
        fontSize: Math.max(12, width * 0.035),
        color: '#666',
    },
    newsCard: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 0,
    },
    newsImage: {
        width: '100%',
        aspectRatio: 16 / 9,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    newsInfo: {
        padding: Math.max(6, width * 0.02),
        backgroundColor: '#f7f7f7',
    },
    newsTitle: {
        fontWeight: 'bold',
        fontSize: Math.max(13, width * 0.038),
        marginBottom: 2,
        color: '#222',
    },
    newsDesc: {
        fontSize: Math.max(11, width * 0.032),
        color: '#444',
        marginBottom: 4,
    },
    newsFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    newsDate: {
        fontSize: Math.max(10, width * 0.03),
        color: '#888',
    },
    newsMore: {
        fontSize: Math.max(10, width * 0.03),
        color: '#007bff',
    },
    eventCard: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
        minWidth: width * 0.65,
        maxWidth: width * 0.95,
    },
    eventInfo: {
        padding: Math.max(6, width * 0.02),
        backgroundColor: '#f7f7f7',
    },
    eventTitle: {
        fontWeight: 'bold',
        fontSize: Math.max(12, width * 0.036),
        marginBottom: 2,
        color: '#222',
    },
    eventDate: {
        fontSize: Math.max(10, width * 0.03),
        color: '#888',
        marginBottom: 2,
    },
    eventDesc: {
        fontSize: Math.max(11, width * 0.032),
        color: '#444',
        marginBottom: 2,
    },
    eventLocation: {
        fontSize: Math.max(10, width * 0.03),
        color: '#888',
        marginBottom: 2,
    },
    eventMore: {
        fontSize: Math.max(10, width * 0.03),
        color: '#007bff',
        marginTop: 2,
    },
});