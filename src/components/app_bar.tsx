import React from "react";
import { TouchableOpacity, View, StyleSheet, ViewStyle } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export interface AppBarProps {
    onMenuPress?: () => void;
    onNotificationsPress?: () => void;
    onProfilePress?: () => void;
    style?: ViewStyle;
}

export default function AppBar({
    onMenuPress,
    onNotificationsPress,
    onProfilePress,
    style,
}: AppBarProps) {
    return (
        <View style={[styles.appBar, style]}>
            <TouchableOpacity onPress={onMenuPress}>
                <MaterialIcons name="menu" size={28} color="#222" />
            </TouchableOpacity>
            <View style={styles.appBarIcons}>
                <TouchableOpacity style={{ marginRight: 16 }} onPress={onNotificationsPress}>
                    <Ionicons name="notifications-outline" size={24} color="#222" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onProfilePress}>
                    <Ionicons name="person-circle" size={28} color="#222" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 12,
        backgroundColor: '#fff',
        elevation: 2,
    },
    appBarIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});