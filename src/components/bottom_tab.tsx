import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export interface BottomTabProps {
  onTabPress?: (tab: string) => void;
  activeTab?: string;
}

export default function BottomTab({ onTabPress, activeTab = "Home" }: BottomTabProps) {
  return (
    <View style={styles.bottomTab}>
      <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress?.("Home")}>
        <Ionicons name="home" size={24} color={activeTab === "Home" ? "#222" : "#888"} />
        <Text style={activeTab === "Home" ? styles.tabLabel : styles.tabLabelInactive}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress?.("Contribuir")}>
        <Ionicons name="heart-outline" size={24} color={activeTab === "Contribuir" ? "#222" : "#888"} />
        <Text style={activeTab === "Contribuir" ? styles.tabLabel : styles.tabLabelInactive}>Contribuir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress?.("Pregações")}>
        <Ionicons name="videocam-outline" size={24} color={activeTab === "Pregações" ? "#222" : "#888"} />
        <Text style={activeTab === "Pregações" ? styles.tabLabel : styles.tabLabelInactive}>Pregações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress?.("Eventos")}>
        <Ionicons name="calendar-outline" size={24} color={activeTab === "Eventos" ? "#222" : "#888"} />
        <Text style={activeTab === "Eventos" ? styles.tabLabel : styles.tabLabelInactive}>Eventos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#222',
    marginTop: 2,
  },
  tabLabelInactive: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});