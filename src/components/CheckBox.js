import { Pressable, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = ({ isChecked, onPress, title }) => {
    const colorScheme = useColorScheme();
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

    const iconName = isChecked ? "checkbox-marked" : "checkbox-blank-outline";

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color={styles.iconColor.color} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default CheckBox;

const baseStyles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 150,
        marginTop: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
        marginLeft: 5,
    },
    iconColor: {
        color: '#000',
    }
});

const lightStyles = StyleSheet.create({
    ...baseStyles,
    title: {
        ...baseStyles.title,
        color: "#000",
    },
    iconColor: {
        ...baseStyles.iconColor,
        color: '#000',
    },
});

const darkStyles = StyleSheet.create({
    ...baseStyles,
    title: {
        ...baseStyles.title,
        color: "#FFF",
    },
    iconColor: {
        ...baseStyles.iconColor,
        color: '#FFF',
    },
});
